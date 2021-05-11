import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { data } from './helpers/__fixtures__/data';
import { API_URL, NYC_DATA_TOKEN } from './helpers/api';
import { FILTER_NAMES } from './helpers/filters';
import { snakeToTitleCase } from './helpers/format';

import App from './App';

describe('<App />', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );

    await act(async () => {
      render(<App />);
    });
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('renders and fetches mock data', async () => {
    screen.getByText('Found 5 squirrels! 🐿');
  });

  it('renders the expected filter labels', () => {
    [...FILTER_NAMES, 'has_notes'].forEach((name) => {
      screen.getByLabelText(snakeToTitleCase(name));
    });
  });

  it('renders filter options', () => {
    [...FILTER_NAMES, 'has_notes'].forEach((name) => {
      const filter = screen.getByLabelText(snakeToTitleCase(name));
      const options = within(filter).getAllByRole('option');
      expect(options.length).toBeGreaterThan(2);
    });
  });

  it('handles filter selections', async () => {
    const colorSelect = screen.getByLabelText('Location');
    await act(async () =>
      userEvent.selectOptions(
        colorSelect,
        screen.getByRole('option', { name: 'Tree' })
      )
    );

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).lastCalledWith(`${API_URL}&location=Tree`, {
      headers: { 'X-App-Token': NYC_DATA_TOKEN },
    });
  });

  it('renders a map', () => {
    screen.getByTestId('map');
  });

  it('renders markers on a map', () => {
    const markers = screen.getAllByTestId('marker');
    expect(markers.length).toBe(data.length);
  });
});
