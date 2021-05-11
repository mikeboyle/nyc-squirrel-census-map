import Filter from '../Filter';
import './Filters.css';

const Filters = ({ filterOptions, currentFilters, handleFilterSelect }) => (
  <div className="filters">
    {Object.keys(filterOptions).map((filterName) => {
      return (
        <Filter
          key={filterName}
          filterName={filterName}
          currentFilter={currentFilters[filterName] || ''}
          options={filterOptions[filterName]}
          onChange={handleFilterSelect}
        />
      );
    })}
  </div>
);

export default Filters;
