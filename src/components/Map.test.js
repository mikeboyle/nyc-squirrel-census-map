import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { data } from '../helpers/__fixtures__/data';
// import { FILTER_NAMES } from './helpers/filters';
import { parseDate } from '../helpers/format';

import Map from './Map';

describe('<Map />', () => {
  beforeEach(() => {
    render(<Map sightings={data} />);
  });

  it('renders markers on a map', () => {
    const markers = screen.getAllByTestId('marker');
    expect(markers.length).toBe(data.length);
  });

  it('opens a marker when clicked', () => {
    const markers = screen.getAllByTestId('marker');
    userEvent.click(markers[0]);
    screen.getByText(parseDate(data[0].date));
  });

  it('closes a marker when it is clicked, then clicked again', () => {
    const markerDate = parseDate(data[0].date);

    const markers = screen.getAllByTestId('marker');
    userEvent.click(markers[0]);
    screen.getByText(markerDate);

    userEvent.click(markers[0]);
    expect(screen.queryByText(markerDate)).toBeNull();
  });

  it('closes a marker when another marker is clicked', () => {
    const markerZeroDate = parseDate(data[0].date);
    const markerOneDate = parseDate(data[1].date);

    const markers = screen.getAllByTestId('marker');
    userEvent.click(markers[0]);
    screen.getByText(markerZeroDate);

    userEvent.click(markers[1]);
    screen.getByText(markerOneDate);
    expect(screen.queryByText(markerZeroDate)).toBeNull();
  });
});
