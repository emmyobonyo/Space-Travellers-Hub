/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rocketState);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile">
      <h1>My Rockets</h1>
      { reservedRockets.map((rocket) => (
        <h4 className="profile-rockets" key={rocket.id}>{ rocket.name }</h4>
      )) }
    </div>
  );
}

export default Profile;
