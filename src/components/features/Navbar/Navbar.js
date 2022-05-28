import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

import styles from './Navbar.module.scss';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getUser } from '../../../redux/userRedux';
import { editUser } from '../../../redux/userRedux';

import Button from '../../common/Button/Button';

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => getUser(state));
  const changeUserStatus = (status) => dispatch(editUser(status));

  return (
    <div className={styles.navbar}>
      <div className={styles.devButtonContainer}>
        <button className={styles.devButton + ' ' + (user.status === 'unlogged' ? styles.isActive : null)} onClick={() => changeUserStatus('unlogged')}>unlogged</button>
        <button className={styles.devButton + ' ' + (user.status === 'logged' ? styles.isActive : null)} onClick={() => changeUserStatus('logged')}>logged</button>
        <button className={styles.devButton + ' ' + (user.status === 'admin' ? styles.isActive : null)} onClick={() => changeUserStatus('admin')}>admin</button>
      </div>
      {user.status === 'unlogged' && <Button type='link' to='/' name='Login' />}
      {user.status !== 'unlogged' && <Button type='link' to='/ads/own' name='My ads' />}
      {user.status !== 'unlogged' && <Button type='link' to='/ad/add' name='Add ad' />}
      {user.status !== 'unlogged' && <Button type='link' to='/' name='Logout' />}
    </div>
  );
};

export default Navbar;
