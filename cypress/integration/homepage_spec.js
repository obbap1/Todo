describe('Todo List Application', () => {
  it('Shows header text', () => {
    cy.visit('/');
    cy.get('.header')
      .should('have.text', 'Todo List');
  });

  it('should have a manage button that routes to /manage', () => {
    cy.visit('/');
    cy.get('#manage')
      .should('have.text', 'Manage')
      .click();
  });

  it('should have a reports button that routes to /reports', () => {
    cy.visit('/');
    cy.get('#reports')
      .should('have.text', 'Reports')
      .click();
  });
});
