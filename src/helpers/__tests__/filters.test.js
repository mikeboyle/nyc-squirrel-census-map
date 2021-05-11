import {
  FILTER_NAMES,
  filterForNotes,
  populateFilterOptions,
} from '../filters';

import { data } from '../__fixtures__/data';

describe('filterForNotes()', () => {
  it("returns only items with notes when filter is 'true'", () => {
    const results = filterForNotes(data, 'true');
    expect(results.map((d) => d.id)).toEqual(['b', 'c']);
  });
  it("returns only items _without_ notes when filter is _'false'_", () => {
    const results = filterForNotes(data, 'false');
    expect(results.map((d) => d.id)).toEqual(['a', 'd', 'e']);
  });
  it('returns all items when filter is undefined', () => {
    const results = filterForNotes(data);
    expect(results).toEqual(data);
  });
  it('returns all items when filter is empty string', () => {
    const results = filterForNotes(data, '');
    expect(results).toEqual(data);
  });
  it('returns all items when filter is any other value', () => {
    const results = filterForNotes(data, 47);
    expect(results).toEqual(data);
  });
});

describe('populateFilterOptions()', () => {
  let results;
  beforeEach(() => {
    results = populateFilterOptions(data);
  });

  it('returns an object with the expected keys', () => {
    const keys = Object.keys(results);
    FILTER_NAMES.forEach((key) => {
      expect(keys).toContain(key);
    });
    expect(keys).toContain('has_notes');
  });

  describe('returns an object with sorted distinct values', () => {
    it('date', () => {
      expect(results['date']).toEqual([
        '10062018',
        '10092018',
        '10172018',
        '10182018',
        '10202018',
      ]);
    });
    it('primary_fur_color', () => {
      expect(results['primary_fur_color']).toEqual([
        'Black',
        'Cinnamon',
        'Gray',
      ]);
    });
    it('highlight_fur_color', () => {
      expect(results['highlight_fur_color']).toEqual([
        'Black',
        'Cinnamon',
        'Grey',
      ]);
    });
    it('location', () => {
      expect(results['location']).toEqual(['Ground', 'Tree']);
    });
    it('running', () => {
      expect(results['running']).toEqual([false, true]);
    });
    it('chasing', () => {
      expect(results['chasing']).toEqual([false, true]);
    });
    it('climbing', () => {
      expect(results['climbing']).toEqual([false, true]);
    });
    it('eating', () => {
      expect(results['eating']).toEqual([false, true]);
    });
    it('foraging', () => {
      expect(results['foraging']).toEqual([false, true]);
    });
    it('approaches', () => {
      expect(results['approaches']).toEqual([false, true]);
    });
    it('kuks', () => {
      expect(results['kuks']).toEqual([false, true]);
    });
    it('quaas', () => {
      expect(results['quaas']).toEqual([false, true]);
    });
  });
});
