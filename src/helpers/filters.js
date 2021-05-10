const FILTER_NAMES = [
  'date',
  'primary_fur_color',
  'highlight_fur_color',
  'location',
  'running',
  'chasing',
  'climbing',
  'eating',
  'foraging',
  'approaches',
  'kuks',
  'quaas',
];

const distinctFieldValues = (sightings, field) => {
  const values = new Set();
  sightings.forEach((sighting) => {
    let value = sighting[field];
    if (value !== undefined) {
      values.add(value);
    }
  });

  return Array.from(values).sort();
};

export const snakeToTitleCase = (string) => {
  return string
    .split('_')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

export const filterForNotes = (data, filter) => {
  switch (filter) {
    case 'true':
      return data.filter((d) => d.other_activities || d.other_interactions);
    case 'false':
      return data.filter((d) => !d.other_activities && !d.other_interactions);
    default:
      return data;
  }
};

export const populateFilterOptions = (data) => {
  return FILTER_NAMES.reduce(
    (filterOptions, name) => {
      filterOptions[name] = distinctFieldValues(data, name);
      return filterOptions;
    },
    { has_notes: [false, true] }
  );
};
