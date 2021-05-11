import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Filter from './index';

const defaultProps = {
  filterName: 'color',
  currentFilter: '',
  options: ['blue', 'green', 'red'],
  onChange: jest.fn(),
};

const renderFilter = (props = {}) => {
  const newProps = { ...defaultProps, ...props };
  render(<Filter {...newProps} />);
};

describe('<Filter />', () => {
  it('renders a label', () => {
    renderFilter();
    screen.getByLabelText('Color');
  });

  it('renders a select element', () => {
    renderFilter();
    screen.getByRole('combobox');
  });

  it('renders options', () => {
    renderFilter();
    screen.getByRole('option', { name: 'All options' });
    defaultProps.options.forEach((name) => {
      screen.getByRole('option', { name });
    });
  });

  it('handles selection change events', () => {
    renderFilter();
    const colorSelect = screen.getByLabelText('Color');
    userEvent.selectOptions(
      colorSelect,
      screen.getByRole('option', { name: 'blue' })
    );

    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('updates value based on props', () => {
    renderFilter({ currentFilter: 'green' });

    const select = screen.getByRole('combobox');
    const option = screen.getByRole('option', { name: 'green' });

    expect(select.value).toBe('green');
    expect(option.selected).toBe(true);
  });
});
