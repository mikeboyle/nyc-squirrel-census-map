import { useState } from 'react';
import InfoWindow from './InfoWindow';
import './Marker.css';

const Marker = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="marker" onClick={() => setOpen(!open)} />
      {open && <InfoWindow text={text} />}
    </>
  );
};

export default Marker;
