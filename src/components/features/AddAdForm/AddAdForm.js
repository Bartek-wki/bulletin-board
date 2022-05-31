import React from 'react';
import { useDispatch } from 'react-redux';

import { addAdRequest } from '../../../redux/adsRedux';

import AdForm from '../AdForm/AdForm';

const AddAdForm = () => {
  const dispatch = useDispatch();

  const addAd = ({ title, content, price, location, images, published, updated, author, phone, status }) => {
    dispatch(addAdRequest({ title, content, price, location, images, published, updated, author, phone, status }));
  };

  return (
    <AdForm action={addAd} button={ 'Add Ad!' }/>
  );
};

export default AddAdForm;
