import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { data } from '../../helpers/__fixtures__/data';
import { parseDate } from '../../helpers/format';

import Marker from './index';

const sighting = data[0];

const defaultProps = {
  sighting,
  isOpen: false,
  toggleOpen: jest.fn(),
};

const renderMarker = (props = {}) => {
  const newProps = { ...defaultProps, ...props };
  render(<Marker {...newProps} />);
};

describe('<Marker />', () => {
  it('renders', () => {
    renderMarker();
    screen.getByTestId('marker');
  });

  it('is clickable', () => {
    renderMarker();
    userEvent.click(screen.getByTestId('marker'));
    expect(defaultProps.toggleOpen).toHaveBeenCalled();
  });

  it('renders an InfoWindow when isOpen is true', () => {
    const { date, primary_fur_color } = sighting;

    renderMarker({ isOpen: true });

    screen.getByText(parseDate(date));
    screen.getByText(primary_fur_color);
  });

  it('does _not_ render an InfoWindow when isOpen is _false_', () => {
    const { date, primary_fur_color } = sighting;

    renderMarker({ isOpen: false });

    expect(screen.queryByText(parseDate(date))).toBeNull();
    expect(screen.queryByText(primary_fur_color)).toBeNull();
  });
});
