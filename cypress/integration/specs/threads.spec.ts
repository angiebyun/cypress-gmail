
import email  from "../../support/page/emails";

describe('Gmail - Check Email Threads', function () {
    beforeEach(function () {
      cy.get_google_token()
    })
  
    it('Check ability to view email threads', function () {
      email.create_send_email()
      email.validate_received('email')
      email.email_threads()
    }) 
  })