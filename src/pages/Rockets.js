import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, joinRocket, cancelRocket } from '../redux/Rockets/rockets';

function Rockets() {
  const rockets = useSelector((state) => state.rocketState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const joinRocketButton = (payload) => {
    dispatch(joinRocket(rockets, payload));
  };

  const cancelRocketButton = (payload) => {
    dispatch(cancelRocket(rockets, payload));
  };

  return (
    <div>
      { rockets.map((rocket) => (
        <div key={rocket.id} className="rocket">
          <img alt="rocket" src={rocket.image} className="rocket-image" />
          <div className="rocket-information">
            <h2 className="rocket-information-elements">{ rocket.name }</h2>
            { rocket.reserved && (
              <span>Reserved</span>
            ) }
            <p className="rocket-information-elements">{ rocket.description }</p>
            { !rocket.reserved && (
              <button type="button" className="rocket-information-elements button" onClick={() => { joinRocketButton(rocket.id); }}>Reserve Rocket</button>
            ) }
            { rocket.reserved && (
              <button type="button" className="rocket-information-elements cancel-button" onClick={() => { cancelRocketButton(rocket.id); }}>Cancel Reservation</button>
            ) }
          </div>
        </div>
      )) }
    </div>
  );
}

export default Rockets;
