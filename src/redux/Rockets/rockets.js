const initialState = [];
const FETCH_DATA = 'react-spacex/rockets/FETCH_DATA';

const JOIN_ROCKET = 'react-spacex/rockets/JOIN_ROCKET';
const CANCEL_ROCKET = 'react-spacex/rockets/JOIN_ROCKET';

export const cancelRocket = (state, payload) => (dispatch) => {
  const newRocketState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: false };
  });
  dispatch({ type: CANCEL_ROCKET, payload: newRocketState });
};

export const joinRocket = (state, payload) => (dispatch) => {
  const newRocketState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: true };
  });
  dispatch({ type: JOIN_ROCKET, payload: newRocketState });
};

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

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.newRocket;
    case JOIN_ROCKET:
      return action.payload;
    case CANCEL_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
