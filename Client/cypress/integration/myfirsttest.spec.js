describe('My First Test', function () {
  beforeEach(function () {
      cy.login();
    })

    it('app runs', function () {
        cy.visit('/');
        cy.get('button').should('be.visible');
        cy.get('[data-cy=filterInput]').type('kom');
        cy.get('[data-cy=keramiekCardList]').should('have.length', 2);
        cy.get('[data-cy=keramiekCard]').should('be.visible');
    });

    it('Mock keramiek get', function () {
        cy.server({ delay: 1000 });
        cy.route({
            method: 'GET',
            url: '/api/ceramics',
            status: 200,
            response:'fixture:keramieks.json'
        });
        cy.visit('/');
        cy.get('[data-cy=keramiekCardList]').should('have.length', 3);
    });

      it('on error should show error message', function() {
        cy.server();
        cy.route({
          method: 'GET',
          url: '/api/ceramics',
          status: 500,
          response: 'ERROR'
        });
        cy.visit('/');
        cy.get('[data-cy=appError]').should('be.visible');
      });
});