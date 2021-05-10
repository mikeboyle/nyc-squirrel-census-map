import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { fetchData } from './helpers/api';
import { filterForNotes, populateFilterOptions } from './helpers/filters';

import Filters from './components/Filters';
import Map from './components/Map';

function App() {
  const [loading, setLoading] = useState(true);
  const [sightings, setSightings] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [currentFilters, setCurrentFilters] = useState({});

  const fetchSightings = useCallback(async () => {
    setLoading(true);

    let data = await fetchData(currentFilters);

    if (Object.keys(filterOptions).length < 1) {
      setFilterOptions(populateFilterOptions(data));
    }

    setSightings(filterForNotes(data, currentFilters['has_notes']));
    setLoading(false);
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
