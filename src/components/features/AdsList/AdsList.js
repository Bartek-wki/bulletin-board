import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getPublishedAds } from '../../../redux/adsRedux';

import styles from './AdsList.module.scss';

import AdBox from '../AdBox/AdBox';

const AdsList = ({ user }) => {

  const allAds = useSelector(state => getPublishedAds(state));

  let ads = '';

  if (user) {
    ads = allAds.filter(ad => ad.author === user);
  } else {
    ads = allAds;
  }

  return (
    <div className={styles.adsContainer}>
      {ads.map(ad => (
        <AdBox key={ad._id} {...ad}/>
      ))}
    </div>
  );
};

AdsList.propTypes = {
  user: PropTypes.string,
};

export default AdsList;
