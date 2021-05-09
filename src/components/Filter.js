import { snakeToTitleCase } from '../helpers/filters';
import { parseDate } from '../helpers/api';
import './Filter.css';

const Filter = ({ filterName, currentFilter, options, onChange }) => {
  const formatOption = (option) => {
    if (filterName === 'date') {
      return parseDate(option).toDateString();
    } else {
      return option.toString();
    }
  };
  return (
    <div className="filter">
      <label htmlFor={filterName}>{snakeToTitleCase(filterName)}</label>
      <select
        id={filterName}
        name={filterName}
        value={currentFilter}
        onChange={onChange}
      >
        <option value="">All options</option>
        {options.map((option) => (
          <option value={option}>{formatOption(option)}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
