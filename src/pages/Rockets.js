import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/Rockets/rockets';

function Rockets() {
  const rockets = useSelector((state) => state.rocketState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      { rockets.map((rocket) => (
        <p key={rocket.id}>{ rocket.description }</p>
      )) }
    </div>
  );
}

export default Rockets;
