import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MAPS_API_KEY } from '../helpers/api';
import { center } from '../helpers/center';
import Marker from './Marker';
import './Map.css';

const DEFAULT_Y = 40.785091;
const DEFAULT_X = -73.968285;
const DEFAULT_LAT_LONG = { x: DEFAULT_X, y: DEFAULT_Y };

const Map = ({ sightings }) => {
  const [openInfoWindow, setOpenInfoWindow] = useState(false);
  const toggleOpenInfoWindow = (key) => {
    if (openInfoWindow === key) {
      setOpenInfoWindow(false);
    } else {
      setOpenInfoWindow(key);
    }
  };

  const latLong = sightings.length > 0 ? center(sightings) : DEFAULT_LAT_LONG;
  const { x, y } = latLong;
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_API_KEY }}
        defaultCenter={{ lat: y, lng: x }}
        defaultZoom={17}
      >
        {sightings.map((sighting, i) => {
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
