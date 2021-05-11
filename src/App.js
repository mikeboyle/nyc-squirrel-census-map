import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from './helpers/api';
import { filterForNotes, populateFilterOptions } from './helpers/filters';

import Filters from './components/Filters';
import Map from './components/Map';

function App() {
  const [loading, setLoading] = useState(true);
  const [sightings, setSightings] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [currentFilters, setCurrentFilters] = useState({});

  useEffect(() => {
    const fetchSightings = async () => {
      setLoading(true);

      let data = await fetchData(currentFilters);

      setSightings(filterForNotes(data, currentFilters['has_notes']));
      setLoading(false);
    };
    fetchSightings();
  }, [currentFilters]);

  useEffect(() => {
    if (Object.keys(filterOptions).length < 1 && sightings.length > 0) {
      setFilterOptions(populateFilterOptions(sightings));
    }
  }, [filterOptions, sightings]);

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
