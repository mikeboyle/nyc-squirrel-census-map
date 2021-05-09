export const distinctFieldValues = (sightings, field) => {
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

export const FILTER_NAMES = [
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
