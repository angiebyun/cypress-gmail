// @ts-ignore
import {createMimeMessage} from 'mimetext'

class emails {
   
    /**
     * It creates a draft message
     */
    static create_draft() {
        let msg_body: string, raw: string, auth: string

       // It creates a MIME message. 
        const msg = createMimeMessage()
        msg.setSender({name: 'Angie Spicy', addr: Cypress.env("user_id")})
        msg.setRecipient(Cypress.env("user_id"))
        msg.setSubject('🌶️ Piper here!')
        msg.setMessage('text/plain', `Hi, I'm a simple text from draft!`)

        // convert text to base64
        raw = msg.asRaw()
        msg_body = btoa(raw)
        
        cy.get('@access_token').then((token) => {
          auth = 'Bearer ' + token

          cy.request({
            method: 'POST',
            url: 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id")  + '/drafts',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': auth
            },
            body: {
              "message": {
                "raw": msg_body
              }
            }
          }).then(({ body }) => {
            cy.writeFile('cypress/fixtures/draft_created.json', body)
            cy.wrap(body.id).as('msg_id')
          })
        })
    }

    /**
     * Send a draft message
    */
    static send_draft() {
        this.create_draft()

        let msg_body: string, raw:string
          
        const msg = createMimeMessage()
        msg.setSender({name: 'Angie Spicy', addr: Cypress.env("user_id")})
        msg.setRecipient(Cypress.env("user_id"))
        msg.setSubject('🌶️ Piper here!')
        msg.setMessage('text/plain', `Hi, I'm a simple text from draft sending!`)
  
        raw = msg.asRaw()
        msg_body = btoa(raw)
        
        cy.get('@access_token').then((token) => {
          cy.get('@msg_id').then((id) => {
            let auth = 'Bearer ' + token
            cy.log(auth)
            cy.request({
              method: 'POST',
              url: 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id")  + '/drafts/send',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': auth
              },
              body: {
                "id": id,
                "message": {
                  "raw": msg_body
                }
              }
            }).then(({ body }) => {
              cy.writeFile('cypress/fixtures/draft_sent.json', body)
              cy.wrap(body.id).as('msg_id')
            })
          })
        })
    }

    /**
     * It sends an email to the user's email address.
     */
    static create_send_email() {
        cy.get('@access_token').then((token) => {
            let auth = 'Bearer ' + token
            let msg_body, raw
            
            const msg = createMimeMessage()
            msg.setSender({name: 'Angie Spicy', addr: Cypress.env("user_id")})
            msg.setRecipient(Cypress.env("user_id"))
            msg.setSubject('🌶️ Piper here!')
            msg.setMessage('text/plain', `Hi, I'm a simple text from send email!`)

            raw = msg.asRaw()
            msg_body = btoa(raw)
            
            cy.request({
                method: 'POST',
                url: 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id")  + '/messages/send',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: {
                    "raw": msg_body
                }
            }).then(({ body }) => {
                cy.writeFile('cypress/fixtures/email_sent.json', body)
                cy.wrap(body.id).as('msg_id')
            })
        })
    }

    /**
     * It validates that the message was received 
     * @param {string} type - The type of message you want to validate. Valid values are: draft, emails
     */
    static validate_received(type: string) {
        cy.get('@access_token').then((token) => {
            let auth = 'Bearer ' + token
            cy.get('@msg_id').then((id) => {
                let url: string

                if (type == "draft") url = 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id")  + '/drafts/' + id
                else url = 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id")  + '/messages/' + id

                cy.request({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': auth
                    }
                }).then(({body}) => {
                    if (type == "draft") expect(body.message.payload.headers[0].name).to.eq('Received')
                    else expect(body.payload.headers[0].name).to.eq('Received')
                    cy.writeFile('cypress/fixtures/validate.json', body)
                })
            })
        })
    }

    /**
     * It gets all the emails from the user's account.
     */
    static get_emails() {
        cy.get('@access_token').then((token) => {
            let auth = 'Bearer ' + token
            cy.log(auth)
            cy.request({
              method: 'GET',
              url: 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id")  + '/messages',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
              },
            }).then(({ body }) => {
              cy.writeFile('cypress/fixtures/all_emails.json', body)
            })
          })
    }

    /**
     * * Move the email with the given message id to the trash
     */
    static trash_emails() {
        cy.get('@access_token').then((token) => {
            cy.get('@msg_id').then((msg_id) => {
              let auth = 'Bearer ' + token

              cy.request({
                method: 'POST',
                url: 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id") + '/messages/' + msg_id + '/trash',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': auth
                }
              }).then(({ body }) => {
                cy.writeFile('cypress/fixtures/trash_email.json', body)
              })
            })
          })
    }

    /**
     * It gets the email thread for the message id that is passed in.
     */
    static email_threads() {
        cy.get('@access_token').then((token) => {
            cy.get('@msg_id').then((msg_id) => {
              let auth = 'Bearer ' + token

              cy.request({
                method: 'GET',
                url: 'https://gmail.googleapis.com/gmail/v1/users/' + Cypress.env("user_id") + '/threads/' + msg_id ,
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': auth
                }
              }).then(({ body }) => {
                cy.writeFile('cypress/fixtures/email_threads.json', body)
              })
            })
          })
    }
}
export default emails;