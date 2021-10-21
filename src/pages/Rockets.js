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
        <div key={rocket.id} className="rocket">
          <img alt="rocket" src={rocket.image} className="rocket-image" />
          <div className="rocket-information">
            <h2 className="rocket-information-elements">{ rocket.name }</h2>
            <p className="rocket-information-elements">{ rocket.description }</p>
            <button type="button" className="rocket-information-elements">Reserve Rocket</button>
          </div>
        </div>
      )) }
    </div>
  );
}

export default Rockets;
