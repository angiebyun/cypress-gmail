
import email  from "../../support/page/emails";

describe('Gmail - Send Email', function () {
    beforeEach(function () {
      cy.loginByGoogleApi()
    })

    it('Check ability to send an email and validate', function () {
      email.create_send_email()
      email.validate_received('email')
    }) 
  })