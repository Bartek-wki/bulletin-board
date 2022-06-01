import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUserRequest } from '../../../redux/userRedux';

const LoadUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserRequest());
  }, [dispatch]);

  return (
    <Navigate to='/' />
  );
};

export default LoadUser;
