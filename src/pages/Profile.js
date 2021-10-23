/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer.newMissions);
  const rockets = useSelector((state) => state.rocketState);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  let filteredMissions;

  if (missions) {
    filteredMissions = missions.filter((mission) => mission.reserved);
  }

  return (
    <main>
      <div className="profile__missions">
        <h1 className="profile__h1">My Missions</h1>
        <ul className="profile__ul">
          {filteredMissions && filteredMissions.map((mission) => {
            const { name, id } = mission;
            return (
              <li
                key={id}
                className="my-list"
              >
                {name}
              </li>
            );
          })}

        </ul>
      </div>
      <div className="profile">
        <h1>My Rockets</h1>
        { reservedRockets.map((rocket) => (
          <h4 className="profile-rockets" key={rocket.id}>{ rocket.name }</h4>
        )) }
      </div>
    </main>
  );
};

export default Profile;
