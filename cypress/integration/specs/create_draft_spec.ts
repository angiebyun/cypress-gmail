
import email  from "../../support/page/emails";

describe('Gmail - Create Draft', function () {
    beforeEach(function () {
      cy.loginByGoogleApi()
    })
  
    it('Check ability to create draft and validate', function () {
      email.create_draft()
      email.validate_received('draft')
      }) 
  })