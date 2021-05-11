import { parseDate, snakeToTitleCase } from '../../helpers/format';
import './Filter.css';

const Filter = ({ filterName, currentFilter, options, onChange }) => {
  const formatOption = (option) => {
    if (filterName === 'date') {
      return parseDate(option);
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
          <option key={option} value={option}>
            {formatOption(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
