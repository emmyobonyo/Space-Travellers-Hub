const initialState = [];
const FETCH_DATA = 'react-spacex/rockets/FETCH_DATA';

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  const newRocket = [];
  rockets.forEach((rocket) => {
    newRocket.push({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images,
    });
  });
  dispatch({ type: FETCH_DATA, newRocket });
};

export const fetchRocketsAction = (payload) => ({
  type: FETCH_DATA,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.newRocket;
    default:
      return state;
  }
};

export default rocketsReducer;
