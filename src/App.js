import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from './helpers/api';
import { distinctFieldValues } from './helpers/filters';

import Filter from './Filter';
import Filters from './Filters';
import Map from './Map';

const FILTER_NAMES = [
  'date',
  'primary_fur_color',
  'highlight_fur_color',
  'location',
  'running',
  'chasing',
  'climbing',
];

function App() {
  const [loading, setLoading] = useState(true);
  const [sightings, setSightings] = useState([]);
  const [currentFilters, setCurrentFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});

  useEffect(() => {
    fetchSightings();
  }, [currentFilters]);

  const handleFilterSelect = (e) => {
    const { name, value } = e.target;
    setCurrentFilters({
      ...currentFilters,
      [name]: value,
    });
  };

  const populateFilterOptions = (data) => {
    return FILTER_NAMES.reduce((filterOptions, name) => {
      filterOptions[name] = distinctFieldValues(data, name);
      return filterOptions;
    }, {});
  };

  const fetchSightings = async () => {
    setLoading(true);
    const data = await fetchData(currentFilters);
    setSightings(data);
    setLoading(false);
    if (Object.keys(filterOptions).length < 1) {
      setFilterOptions(populateFilterOptions(data));
    }
  };

  const resultText = loading
    ? 'Loading squirrels...'
    : `Found ${sightings.length} squirrels!`;

  return (
    <div className="App">
      <p>{resultText}</p>
      <Filters
        filterOptions={filterOptions}
        currentFilters={currentFilters}
        handleFilterSelect={handleFilterSelect}
      />
      {sightings.length > 0 && <Map sightings={sightings} />}
    </div>
  );
}

export default App;
