// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('login', () => {
    const email = 'ceramicmaster@hogent.be';
  
    cy.request({
      method: 'POST',
      url: '/api/account',
      body: { email, password: 'P@ssword1111' },
    }).then((res) => localStorage.setItem('currentUser', res.body));
  });
  
  Cypress.Commands.add('register', (email, password) => {
    cy.request({
      method: 'POST',
      url: '/api/account/register',
      body: { email, password },
    }).then((res) => localStorage.setItem('currentUser', res.body));
  });
  
