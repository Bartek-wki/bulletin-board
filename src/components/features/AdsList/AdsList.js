import React from 'react';
//import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/adsRedux';

import styles from './AdsList.module.scss';

import AdBox from '../AdBox/AdBox';

const AdsList = () => {
  const ads = useSelector(state => getAll(state));


  return (
    <div className={styles.adsContainer}>
      {ads.map(ad => (
        <AdBox key={ad.id} {...ad}/>
      ))}
    </div>
  );
};

export default AdsList;
