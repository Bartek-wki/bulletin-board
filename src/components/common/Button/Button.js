import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ type, to, name }) => {

  if (type === 'link') {
    return (
      <Link className={styles.button} to={to}>{name}</Link>
    );
  } else {
    return (
      <button className={styles.button}>{name}</button>
    );
  }
};

Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
