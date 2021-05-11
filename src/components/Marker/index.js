import cx from 'classnames';
import InfoWindow from '../InfoWindow';
import './Marker.css';

const Marker = ({ sighting, isOpen, toggleOpen }) => {
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
