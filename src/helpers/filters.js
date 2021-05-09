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
