export const filter = (name, val, num) => {
  cy.findByLabelText(name).select(val);
  cy.contains(`Found ${num} squirrels! 🐿`);
};

describe('filtering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('filters for notes', () => {
    filter('Has Notes', 'true', 626);
    filter('Has Notes', 'false', 2397);
    filter('Has Notes', '', 3023);
  });

  it('filters for date', () => {
    filter('Date', 'Fri Oct 12 2018', 218);
    filter('Date', 'Wed Oct 17 2018', 216);
    filter('Date', '', 3023);
  });

  it('multiple filters', () => {
    // Set multiple filters
    filter('Has Notes', 'true', 626);
    filter('Date', 'Sat Oct 06 2018', 80);
    filter('Primary Fur Color', 'Gray', 62);
    filter('Climbing', 'true', 17);
    filter('Location', 'Above Ground', 13);

    // Unset filters in different order
    filter('Has Notes', '', 58);
    filter('Primary Fur Color', '', 67);
    filter('Date', '', 520);
    filter('Location', '', 658);
    filter('Climbing', '', 3023);
  });
});
