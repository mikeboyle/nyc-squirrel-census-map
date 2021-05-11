import { API_URL, fetchData, NYC_DATA_TOKEN } from '../api';
import { data } from '../__fixtures__/data';

const expectedHeaders = { headers: { 'X-App-Token': NYC_DATA_TOKEN } };

describe('fetchData()', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('fetches from the api url', async () => {
    await fetchData();
    expect(fetch).toHaveBeenCalledWith(API_URL, expectedHeaders);
  });

  it('adds filters to query params', async () => {
    const filters = { color: 'blue', age: '3' };
    const expectedURL = `${API_URL}&color=blue&age=3`;

    await fetchData(filters);

    expect(fetch).toHaveBeenLastCalledWith(expectedURL, expectedHeaders);
  });

  it('ignores the has_notes filter', async () => {
    const filters = { color: 'green', age: '67', has_notes: true };
    const expectedURL = `${API_URL}&color=green&age=67`;

    await fetchData(filters);

    expect(fetch).toHaveBeenLastCalledWith(expectedURL, expectedHeaders);
  });

  it('returns json data', async () => {
    const res = await fetchData();
    expect(res).toEqual(data);
  });
});
