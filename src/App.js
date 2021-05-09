import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { fetchData } from './helpers/api';
import { distinctFieldValues } from './helpers/filters';

import Filters from './components/Filters';
import Map from './components/Map';

const FILTER_NAMES = [
  'date',
  'primary_fur_color',
  'highlight_fur_color',
  'location',
  'running',
  'chasing',
  'climbing',
  'eating',
  'foraging',
  'approaches',
  'kuks',
  'quaas',
];

function App() {
  const [loading, setLoading] = useState(true);
  const [sightings, setSightings] = useState([]);
  const [currentFilters, setCurrentFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});

  const fetchSightings = useCallback(async () => {
    setLoading(true);
    let data = await fetchData(currentFilters);
    if (currentFilters['has_notes'] === 'true') {
      data = data.filter((d) => d.other_activities || d.other_interactions);
    } else if (currentFilters['has_notes'] === 'false') {
      data = data.filter((d) => !d.other_activities && !d.other_interactions);
    }
    setSightings(data);
    setLoading(false);
    if (Object.keys(filterOptions).length < 1) {
      setFilterOptions(populateFilterOptions(data));
    }
  }, [currentFilters, filterOptions]);

  useEffect(() => {
    fetchSightings();
  }, [currentFilters, fetchSightings]);

  const handleFilterSelect = (e) => {
    const { name, value } = e.target;
    setCurrentFilters({
      ...currentFilters,
      [name]: value,
    });
  };

  const populateFilterOptions = (data) => {
    return FILTER_NAMES.reduce(
      (filterOptions, name) => {
        filterOptions[name] = distinctFieldValues(data, name);
        return filterOptions;
      },
      { has_notes: [false, true] }
    );
  };

  const resultText = loading
    ? 'Loading squirrels...'
    : `Found ${sightings.length} squirrels! 🐿`;

  return (
    <div className="App">
      <h1>{resultText}</h1>
      <Filters
        filterOptions={filterOptions}
        currentFilters={currentFilters}
        handleFilterSelect={handleFilterSelect}
      />
      <Map sightings={sightings} />
    </div>
  );
}

export default App;
