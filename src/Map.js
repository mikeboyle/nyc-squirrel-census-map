import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MAPS_API_KEY } from './api';
import { center } from './center';
import Marker from './Marker';
import './Map.css';

const Map = ({ sightings }) => {
  const [openInfoWindow, setOpenInfoWindow] = useState(false);
  const toggleOpenInfoWindow = (key) => {
    if (openInfoWindow === key) {
      setOpenInfoWindow(false);
    } else {
      setOpenInfoWindow(key);
    }
  };

  const data = sightings.filter(
    (sighting) => sighting.other_activities || sighting.other_interactions
  );

  const { x, y } = center(sightings);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_API_KEY }}
        defaultCenter={{ lat: y, lng: x }}
        defaultZoom={17}
      >
        {data.map((sighting, i) => {
          const { x, y, unique_squirrel_id } = sighting;
          const key = `${unique_squirrel_id}-${i}`;
          return (
            <Marker
              key={key}
              lat={Number(y)}
              lng={Number(x)}
              sighting={sighting}
              isOpen={openInfoWindow === key}
              toggleOpen={() => toggleOpenInfoWindow(key)}
            />
          );
        })}
        <div lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
