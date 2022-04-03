
import email  from "../../support/page/emails";

describe('Gmail - Send Email from Draft', function () {
    beforeEach(function () {
      cy.loginByGoogleApi()
    })
  
    it('Check ability to send a drafted email', function () {
      email.send_draft()
      email.validate_received('email')
      })
  })