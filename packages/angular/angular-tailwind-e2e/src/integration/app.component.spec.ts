describe('angular-angular-tailwind', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-template-root').should('exist');
  });
});