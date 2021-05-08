import './App.css';
import { useState, useEffect } from 'react';
import { fetchData, mapURL } from './api';

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

  return (
    <div className="App">
      <p>Found {sightings.length} squirrels!</p>
      {sightings.length > 0 && (
        <Map
          isMarkerShown
          googleMapURL={mapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          sightings={sightings}
        />
      )}
    </div>
  );
}

export default App;
