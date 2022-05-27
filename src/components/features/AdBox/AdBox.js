import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


import styles from './AdBox.module.scss';

const AdBox = ({ id, title, updateDate, images, prise, location}) => {
  console.log();

  return (
    <div className={styles.adContainer}>
      <Link to={'/ad/' + id}>
        <div className={styles.imageContainer}>
          <img alt='' src={`${process.env.PUBLIC_URL + images}`} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title_prise}>
            <p>{title}</p>
            {prise && <p>${prise}</p>}
          </div>
          <div className={styles.location_updateDate}>
            <p>{location}</p>
            <p>{updateDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

AdBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  updateDate: PropTypes.string,
  location: PropTypes.string,
  images: PropTypes.string,
  prise: PropTypes.number,
};

export default AdBox;
