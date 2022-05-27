import React from 'react';

import AdsList from '../AdsList/AdsList';

import { getUser } from '../../../redux/userRedux';
import { useSelector } from 'react-redux';

const OwnAds = () => {

  const user = useSelector(state => getUser(state));

  return (
    <AdsList user={user.email} />
  );
};

export default OwnAds;
