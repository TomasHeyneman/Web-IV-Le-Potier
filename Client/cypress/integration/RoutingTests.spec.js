describe('Routertest', function () {
    beforeEach(function () {
        cy.login();
      })

it('Routes naar shopping-cart', function () {

    cy.visit('');
    cy.get('[data-cy=shopping-cart]').click();
    cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/keramiek/shopping-cart'))
});

it('Routes naar aboutme', function () {

    cy.visit('');
    cy.get('[data-cy=aboutme]').click();
    cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/keramiek/aboutme'))
});

it('Routes naar list', function () {

    cy.visit('');
    cy.get('[data-cy=list]').click();
    cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/keramiek/list'))
});

it('Routes naar login', function() {
    cy.visit('');
    cy.get('[data-cy=logout]').click();   
    cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/login') )
});

it('Routes naar registreer', function() {
    cy.visit('');
     cy.get('[data-cy=logout]').click();  
    cy.get('[data-cy=register]').click();   
    cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/register') )
});

});