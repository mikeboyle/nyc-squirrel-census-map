import GoogleMapReact from 'google-map-react';
import { MAPS_API_KEY } from './api';
import { center } from './center';
import Marker from './Marker';
import './Map.css';

const Map = ({ sightings }) => {
  const data = sightings.slice(0, 10);
  const { x, y } = center(sightings);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_API_KEY }}
        defaultCenter={{ lat: y, lng: x }}
        defaultZoom={17}
      >
        {sightings.map((sighting) => {
          const { x, y, unique_squirrel_id } = sighting;
          return (
            <Marker lat={Number(y)} lng={Number(x)} text={unique_squirrel_id} />
          );
        })}
        <div lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
