describe('angular-angular-material', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-template-root').should('exist');
  });
});