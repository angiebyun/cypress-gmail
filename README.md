<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## 🌶️ About The Project

This project automates some main functionalities of Gmail using Gmail API.
* **_Create Draft_** - the user should be allowed to save their email if they want to come back to it later
* **_Send Email from Draft_**- the user should be allowed to come back to a drafted email and send from their drafts when they’ve gotten all the information to finish an email
* **_Send Email from Compose_** - the user should be allowed to compose and send an email with information including sender, recipient, subject, and message body
* **_View Email Thread_** - the user should be allowed to read their emails with recipient, sender, and message body information
* **_Trash Email_** - the user should be allowed to trash their spam or irrelevant emails that don’t need to be in the inbox

The test cases above were chosen because these are the main functionality of an email system considering that the meaning of email (Electronic mail) is a mode of exchanging messages among people through electronic devices. The user should be able to create drafts, view emails, compose and send an email, send from drafts and trash emails in a fully functional emailing system. 

### 🌶️ Built With

* [Cypress](https://www.cypress.io)
* [NPM](https://www.npmjs.com)


<!-- GETTING STARTED -->
## 🌶️ Getting Started

Clone repository into working directory, this repository does not include node modules - instructions on installing these modules can be found below.

### 🌶️ Prerequisites

[Node.js](https://nodejs.org/en/download/) and npm must be installed
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/angiebyun/cypress-gmail.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## 🌶️ Usage

To run the Cypress tests in UI, navigate to working directory in command then open Cypress using command below. Select Electron browser to run files.

* Open Cypress
  ```sh
  npx cypress open
  ```
To run the Cypress tests in headless, navigate to working directory in command then open Cypress using command below.

* Open Cypress
  ```sh
  npx cypress run
  ```

<!-- LICENSE -->
## 🌶️ License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## 🌶️ Contact

Project Link: [https://github.com/angiebyun/cypress-gmail](https://github.com/angiebyun/cypress-gmail)


<!-- REFERENCES -->
## 🌶️ References

* [Google Developers > Gmail API](https://developers.google.com/gmail/api/reference/rest)
* [Oauth Playground](https://developers.google.com/oauthplayground/)

<p align="right">(<a href="#top">back to top</a>)</p>



