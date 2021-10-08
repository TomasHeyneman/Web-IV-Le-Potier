describe('FormValidationTest', function () {
    beforeEach(function () {
        cy.login();
      })
describe('Form validation with wrong input shows error message', function(){

    it('Clicks required fields show error', function(){
        cy.visit('/keramiek/shopping-cart');
        cy.get('[data-cy=submitButton]').should('be.disabled');

        cy.get('[data-cy=keramiekInput]').click(),
        cy.get('[data-cy=colorInput]').click(),
        cy.get('[data-cy=selectPrice]').select('60'),
        cy.get('[data-cy=descriptionInput]').click()
    });

})
});

describe('Form validation tests with correct input', function () {
    beforeEach(function () {
      cy.login();
    })
    it('Form filled in correctly enables submit button', function() {
      cy.visit('/keramiek/shopping-cart');
      cy.get('[data-cy=submitButton]').should('be.disabled');
  
      cy.get('[data-cy=keramiekInput]').type('Keramiek'),
      cy.get('[data-cy=colorInput]').type('Groen'),
      cy.get('[data-cy=selectPrice]').select('20'),
      
      cy.get('[data-cy=descriptionInput]').type("beschrijving");
      cy.get('[data-cy=submitButton]').should('be.enabled');
    })
});
