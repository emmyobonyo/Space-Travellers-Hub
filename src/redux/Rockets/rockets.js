import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const FETCH_DATA = 'spaceTravlers/missions/FETCH_DATA';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (dispatch) => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const rockets = await response.json();
    const newRocket = [];
    rockets.forEach((rocket, id) => {
      newRocket.push({
        id: rocket[id].id,
        name: rocket[id].name,
        description: rocket[id].description,
        image: rocket[id].flickr_images,
      });
    });
    dispatch({ type: 'FETCH_ROCKETS', newRocket });
  },
);

export const fetchRocketsAction = (payload) => ({
  type: FETCH_DATA,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchRocketsAction:
      return action.newRocket;
    default:
      return state;
  }
};

export default rocketsReducer;
