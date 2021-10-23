import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import store from './redux/configureStore';

it('should return the Navigation', () => {
  const navigation = render(<Router><Navbar /></Router>);
  expect(navigation).toMatchSnapshot();
});

describe('click events', () => {
  test('should return the rockets page', () => {
    const rockets = render(<Provider store={store}><Rockets /></Provider>);
    expect(rockets).toMatchSnapshot();
    expect(rockets.queryByText(/All Rockets/)).toBeInTheDocument();
  });

  test('should return the missions page', () => {
    const missions = render(<Provider store={store}><Missions /></Provider>);
    expect(missions).toMatchSnapshot();
    expect(missions.queryByText(/Mission/)).toBeInTheDocument();
  });

  test('should return the profile page', () => {
    const profile = render(<Provider store={store}><Profile /></Provider>);
    expect(profile).toMatchSnapshot();
    expect(profile.queryByText(/My Missions/)).toBeInTheDocument();
  });
});
