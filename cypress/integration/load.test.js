import { FILTER_NAMES } from '../../src/helpers/filters';
import { snakeToTitleCase } from '../../src/helpers/format';

describe('page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('loads the page with data', () => {
    cy.contains('Found 3023 squirrels! 🐿');
  });

  it('loads filters', () => {
    [...FILTER_NAMES, 'has_notes'].forEach((name) => {
      cy.findByLabelText(snakeToTitleCase(name));
    });
  });

  it('loads a map', () => {
    cy.findByLabelText('Map').should('exist');
    cy.get('iframe').should('exist');
  });

  it('has markers', () => {
    cy.get('.marker').should('have.length', 3023);
  });
});
