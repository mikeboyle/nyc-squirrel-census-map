import { parseDate } from '../../helpers/format';
import './InfoWindow.css';
import { Sighting } from '../../types/types';
import React from 'react';

type InfoWindowProps = {
  sighting: Sighting,
  onRequestClose: () => void,
};

const InfoWindow: React.FC<InfoWindowProps> = ({ sighting, onRequestClose }) => {
  const {
    date,
    primary_fur_color: color,
    age,
    other_activities: activities,
    other_interactions: interactions,
    specific_location: specificLocation,
  } = sighting;

  return (
    <div className="infoWindow" onClick={onRequestClose}>
      <ul>
        <li>
          <b>Date:</b> {parseDate(date)}
        </li>
        <li>
          <b>Color:</b> {color}
        </li>
        <li>
          <b>Age:</b> {age}
        </li>
        {specificLocation && (
          <li>
            <b>Specific location:</b> {specificLocation}
          </li>
        )}
        {(activities || interactions) && (
          <li>
            <b>Notes: </b>
            {activities}
            <br />
            {interactions}
          </li>
        )}
      </ul>
    </div>
  );
};

export default InfoWindow;
