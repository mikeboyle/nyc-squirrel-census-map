import './App.css';
import { useState, useEffect } from 'react';
import { fetchData, mapURL } from './api';

import Map from './Map';
import NewMap from './NewMap';

function App() {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    async function fetchSightings() {
      const data = await fetchData();
      setSightings(data);
    }
    fetchSightings();
  }, []);

  const resultText = sightings.length
    ? `Found ${sightings.length} squirrels!`
    : 'Loading squirrels...';

  return (
    <div className="App">
      <p>{resultText}</p>
      {sightings.length > 0 && <NewMap sightings={sightings} />}
    </div>
  );
}

export default App;
