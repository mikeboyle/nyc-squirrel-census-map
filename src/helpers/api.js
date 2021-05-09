import { parse } from 'date-fns';

const NYC_DATA_TOKEN = process.env['REACT_APP_NYC_DATA_APP_TOKEN'];
export const MAPS_API_KEY = process.env['REACT_APP_MAPS_API_KEY'];

export const fetchData = async (filters = {}) => {
  let url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=5000';
  Object.keys(filters).forEach((key) => {
    if (key !== 'has_notes') {
      const val = filters[key];
      // casting string to Boolean allows 'false' but not empty string
      if (Boolean(val)) {
        url += `&${key}=${val}`;
      }
    }
  });

  const res = await fetch(url, {
    headers: { 'X-App-Token': NYC_DATA_TOKEN },
  });
  const json = await res.json();
  return json;
};

export const parseDate = (value) => {
  return parse(value, 'LLddyyyy', new Date());
};
