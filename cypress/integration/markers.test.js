describe('markers', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // Filter out some findings here for ease of visual debugging.
    // Wait for the 'Found 62 squirrels!' text to ensure API calls are
    // complete before clicking on markers
    cy.findByLabelText('Has Notes').select('true');
    cy.findByLabelText('Date').select('Wed Oct 10 2018');
    cy.contains('Found 62 squirrels! 🐿');
  });

  it('opens a marker when clicked', () => {
    cy.get('.marker').eq(0).click({ force: true });
    cy.get('.infoWindow').should('exist');
  });

  it('closes the open marker when another marker is clicked', () => {
    cy.get('.marker').eq(0).click({ force: true });
    return cy.get('.infoWindow').then(($el) => {
      const text0 = $el.text();

      cy.get('.marker').eq(1).click({ force: true });
      cy.get('.infoWindow').then(($el) => {
        const text1 = $el.text();
        expect(text0).not.to.eq(text1);
      });
    });
  });

  it('closes an open marker when it is clicked again', () => {
    cy.get('.marker').eq(0).click({ force: true });
    cy.get('.infoWindow').should('exist');

    cy.get('.marker').eq(0).click({ force: true });
    cy.get('.infoWindow').should('not.exist');
  });
});
