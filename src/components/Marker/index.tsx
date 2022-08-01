import cx from 'classnames';
import { Sighting } from '../../types/types';
import InfoWindow from '../InfoWindow';
import './Marker.css';

type MarkerProps = {
  sighting: Sighting;
  isOpen: boolean;
  toggleOpen: () => void;
};

const Marker: React.FC<MarkerProps> = ({ sighting, isOpen, toggleOpen }) => {
  return (
    <>
      <div
        data-testid="marker"
        className={cx('marker', { open: isOpen })}
        onClick={() => {
          toggleOpen();
        }}
      />
      {isOpen && <InfoWindow sighting={sighting} onRequestClose={toggleOpen} />}
    </>
  );
};

export default Marker;
