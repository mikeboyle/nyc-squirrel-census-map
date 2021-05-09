import Filter from './Filter';

const Filters = ({ filterOptions, currentFilters, handleFilterSelect }) => {
  return Object.keys(filterOptions).map((filterName) => {
    return (
      <Filter
        key={filterName}
        filterName={filterName}
        currentFilter={currentFilters[filterName] || ''}
        options={filterOptions[filterName]}
        onChange={handleFilterSelect}
      />
    );
  });
};

export default Filters;
