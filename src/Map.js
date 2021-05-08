import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { center } from './center';

const Map = withScriptjs(
  withGoogleMap((props) => {
    const { sightings } = props;
    const { x, y } = center(sightings);
    return (
      <GoogleMap defaultZoom={15} defaultCenter={{ lat: y, lng: x }}>
        {sightings.map((sighting, i) => {
          const { x, y } = sighting;
          return (
            <Marker
              key={`sighting.unique_squirrel_id-${i}`}
              position={{ lat: Number(y), lng: Number(x) }}
            />
          );
        })}
      </GoogleMap>
    );
  })
);

export default Map;
