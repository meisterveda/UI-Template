describe('angular-angular-tailwind', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-template-nx-welcome').should('exist');
  });
});