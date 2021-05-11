import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Filters from './index';

const props = {
  filterOptions: {
    color: ['red', 'blue'],
    location: ['earth', 'mars', 'moon'],
    climbing: [true, false],
  },
  currentFilters: {
    color: '',
    location: '',
    climbing: '',
  },
  handleFilterSelect: jest.fn(),
};

describe('<Filters />', () => {
  beforeEach(() => {
    render(<Filters {...props} />);
  });

  it('renders filters', () => {
    screen.getByLabelText('Color');
    screen.getByLabelText('Location');
    screen.getByLabelText('Climbing');
  });

  it('handles change events', async () => {
    const colorSelect = screen.getByLabelText('Color');
    userEvent.selectOptions(
      colorSelect,
      screen.getByRole('option', { name: 'blue' })
    );

    expect(props.handleFilterSelect).toHaveBeenCalled();
  });
});
