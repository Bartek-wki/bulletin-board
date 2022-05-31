import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './AdBox.module.scss';

const AdBox = ({ _id, title, updated, images, price, location}) => {
  console.log();

  return (
    <div className={styles.adContainer}>
      <Link to={'/ad/' + _id}>
        <div className={styles.imageContainer}>
          <img alt='' src={`${process.env.PUBLIC_URL}/images/uploads/${images}`} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title_price}>
            <p>{title}</p>
            {price && <p>${price}</p>}
          </div>
          <div className={styles.location_updated}>
            <p>{location}</p>
            <p>{updated}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

AdBox.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  updated: PropTypes.string,
  location: PropTypes.string,
  images: PropTypes.string,
  price: PropTypes.number,
};

export default AdBox;
