import { snakeToTitleCase } from '../helpers/filters';
import './Filter.css';

const Filter = ({ filterName, currentFilter, options, onChange }) => {
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
          <option value={option}>{option.toString()}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
