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
        <div key={rocket.id}>
          <img alt="rocket" src={rocket.image} />
          <div>
            <h2>{ rocket.name }</h2>
            <p>{ rocket.description }</p>
          </div>
        </div>
      )) }
    </div>
  );
}

export default Rockets;
