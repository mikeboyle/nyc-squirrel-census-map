const Filter = ({ filterName, currentFilter, options, onChange }) => {
  return (
    <select name={filterName} value={currentFilter} onChange={onChange}>
      <option value="">All {filterName}s</option>
      {options.map((option) => (
        <option value={option}>{option.toString()}</option>
      ))}
    </select>
  );
};

export default Filter;
