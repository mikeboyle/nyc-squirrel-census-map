export const NYC_DATA_TOKEN = process.env['REACT_APP_NYC_DATA_APP_TOKEN'];
export const MAPS_API_KEY = process.env['REACT_APP_MAPS_API_KEY'];
export const API_URL =
  'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=5000';

export const fetchData = async (filters = {}) => {
  let url = API_URL;
  Object.keys(filters).forEach((key) => {
    if (key !== 'has_notes') {
      const val = filters[key];
      if (val) {
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
