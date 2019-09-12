describe('Todo List Application', () => {
  it('should have a manage button that routes to /manage', () => {
    cy.visit('/');
    cy.get('button').first()
      .should('have.text', 'Manage')
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/manage');
    });
  });

  it('should have a reports button that routes to /reports', () => {
    cy.visit('/');
    cy.get('button').eq(1)
      .should('have.text', 'Reports')
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/reports');
    });
  });
});
