import { parse } from 'date-fns';

const NYC_DATA_TOKEN = process.env['REACT_APP_NYC_DATA_APP_TOKEN'];
export const MAPS_API_KEY = process.env['REACT_APP_MAPS_API_KEY'];
export const mapURL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

export const fetchData = async () => {
  const res = await fetch(
    'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=5000',
    {
      headers: { 'X-App-Token': NYC_DATA_TOKEN },
    }
  );
  const json = await res.json();
  // console.log(fieldNames(json));
  // console.log(distinctFieldValues(json, 'date'));
  // console.log(distinctFieldValues(json, 'age'));
  // console.log(distinctFieldValues(json, 'primary_fur_color'));
  // console.log(distinctFieldValues(json, 'highlight_fur_color'));
  // console.log(distinctFieldValues(json, 'location'));
  // console.log(distinctFieldValues(json, 'running'));
  // console.log(distinctFieldValues(json, 'chasing'));
  // console.log(distinctFieldValues(json, 'climbing'));
  // console.log(distinctFieldValues(json, 'specific_location'));

  return json;
};

export const fieldNames = (sightings) => {
  const names = new Set();
  sightings.forEach((sighting) => {
    const keys = Object.keys(sighting);
    keys.forEach((key) => names.add(key));
  });
  return names;
};

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

export const parseDate = (value) => parse(value, 'LLddyyyy', new Date());
