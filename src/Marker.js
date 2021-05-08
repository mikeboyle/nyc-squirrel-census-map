import cx from 'classnames';
import InfoWindow from './InfoWindow';
import './Marker.css';

const Marker = ({ sighting, isOpen, toggleOpen }) => {
  return (
    <>
      <div className={cx('marker', { open: isOpen })} onClick={toggleOpen} />
      {isOpen && <InfoWindow sighting={sighting} onRequestClose={toggleOpen} />}
    </>
  );
};

export default Marker;
