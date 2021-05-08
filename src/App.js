import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from './api';

import Map from './Map';

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
      {sightings.length > 0 && <Map sightings={sightings} />}
    </div>
  );
}

export default App;
