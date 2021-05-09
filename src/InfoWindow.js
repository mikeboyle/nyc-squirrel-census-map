import { parseDate } from './helpers/api';
import './InfoWindow.css';

const InfoWindow = ({ sighting, onRequestClose }) => {
  const {
    unique_squirrel_id: id,
    date,
    primary_fur_color: color,
    age,
    other_activities: activities,
    other_interactions: interactions,
  } = sighting;

  return (
    <div className="infoWindow" onClick={onRequestClose}>
      <ul>
        <li>
          <b>Date:</b> {parseDate(date).toDateString()}
        </li>
        <li>
          <b>Color:</b> {color}
        </li>
        <li>
          <b>Age:</b> {age}
        </li>
        {(activities || interactions) && (
          <li>
            <b>Notes:</b>
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
