import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { data } from '../helpers/__fixtures__/data';
import { parseDate } from '../helpers/format';

import InfoWindow from './InfoWindow';

const sighting = {
  ...data[0],
  age: 'Adult',
  other_activities: 'eating a nut',
  other_interactions: 'looked at me',
  specific_location: 'on a park bench',
};

const props = {
  sighting,
  onRequestClose: jest.fn(),
};

describe('<Marker />', () => {
  beforeEach(() => {
    render(<InfoWindow {...props} />);
  });

  it('renders details about the sighting', () => {
    const {
      date,
      primary_fur_color: color,
      age,
      other_activities: activities,
      other_interactions: interactions,
      specific_location: specificLocation,
    } = sighting;

    screen.getByText(parseDate(date));
    screen.getByText(color);
    screen.getByText(age);
    screen.getByText(new RegExp(activities));
    screen.getByText(new RegExp(interactions));
    screen.getByText(specificLocation);
  });

  it('handles click events', () => {
    userEvent.click(screen.getByText('on a park bench'));
    expect(props.onRequestClose).toHaveBeenCalled();
  });
});
