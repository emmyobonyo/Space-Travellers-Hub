import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/Rockets/rockets';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <>
      <p>Hello World</p>
    </>
  );
}

export default Rockets;
