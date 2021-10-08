describe('Routertest', function () {
    beforeEach(function () {
        cy.login();
      })
it('Correct startup', function () {
    cy.visit('');
});

it('HttpGet ceramics', function () {
    cy.server();
    cy.route({ method: 'GET', url: '/api/ceramics' });
});

});


   
