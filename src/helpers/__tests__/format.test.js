import { parseDate, snakeToTitleCase } from '../format';

describe('parseDate', () => {
  it('converts a mmddyyy string into a date string', () => {
    expect(parseDate('10182018')).toBe('Thu Oct 18 2018');
  });
});

describe('snakeToTitleCase()', () => {
  it('turns a snake case string into title case', () => {
    expect(snakeToTitleCase('a_cool_story')).toBe('A Cool Story');
  });

  it('only adds an initial cap if there is no snake casing', () => {
    expect(snakeToTitleCase('a cool story')).toBe('A cool story');
  });
});
