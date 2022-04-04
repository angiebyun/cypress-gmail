
/** 
 * Get access token from Google API to use in gmail requests
 */
Cypress.Commands.add('get_google_token', () => {

    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/oauth2/v4/token',
      body: {
        grant_type: 'refresh_token',
        client_id: Cypress.env('googleClientId'),
        client_secret: Cypress.env('googleClientSecret'),
        refresh_token: Cypress.env('googleRefreshToken'),
      },
    }).then(({ body }) => {
      const { access_token } = body
      cy.wrap(access_token).as('access_token')
      cy.writeFile('cypress/fixtures/token_Response.json', body)
    })
  })
