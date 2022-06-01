import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAdRequest } from '../../../redux/adsRedux';
import { getUser } from '../../../redux/userRedux';
import { Navigate } from 'react-router-dom';

import AdForm from '../AdForm/AdForm';

const AddAdForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => getUser(state));

  const addAd = ({ title, content, price, location, images, published, updated, author, phone, status }) => {
    dispatch(addAdRequest({ title, content, price, location, images, published, updated, author, phone, status }));
  };

  if (!user) {
    return (
      <Navigate to={'/user/no-permission'} />
    );
  }
  return (
    <AdForm action={addAd} button={ 'Add Ad!' }/>
  );
};

export default AddAdForm;
