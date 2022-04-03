/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

// .env
// REACT_APP_GOOGLE_CLIENTID = '245096629492-vce8m73dba1g6nqgpg3ji98po23rnk9i.apps.googleusercontent.com'
// REACT_APP_GOOGLE_CLIENT_SECRET = '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'
// GOOGLE_REFRESH_TOKEN = '1//04ee8forGkleQCgYIARAAGAQSNwF-L9IrzDr-vxjKdk5BxWgf1G5QwSXDCUmOoZjzreQn8UqXnln_NiJ3xoLWBCpl-yLOPPQobhI'


// dotenv.config()

// export default (on, config) => {
//   // ...
//   config.env.googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN
//   config.env.googleClientId = process.env.REACT_APP_GOOGLE_CLIENTID
//   config.env.googleClientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET

//   // plugins code ...

//   return config
// }