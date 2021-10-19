import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Rockets from '../Rockets/Rockets';
import './Navlink.css';
import logo from './assets/planet.png'

function Navlink() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <div className='logo'>
              <img src={logo} alt='logo' className='logo'/>
              <h1>Space Traveller' Hub</h1>
            </div>
            <ul>
              <li>
                <NavLink to='/' activeClassName='active'>Rockets</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/'>
              <Rockets />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  )
}

export default Navlink
