import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <>
      <nav className="nav-bar">
        <div className="image">
          <img src={logo} className="img" alt="Space-Ship Logo" />
          <h3 className="head">Space Travelers&apos; Hub</h3>
        </div>
        <ul className="list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="current"
                className="nav-link"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
