import email  from "../../support/page/emails";

describe('Gmail - Trash Emails', function () {
    beforeEach(function () {
      cy.get_google_token()
    })
  
    it('Check ability to trash emails', function () {
      email.create_send_email()
      email.validate_received('email')
      email.trash_emails()        
      }) 
  })