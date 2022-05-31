import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { useForm } from 'react-hook-form';

import styles from './AdForm.module.scss';

import Button from '../../common/Button/Button';
import { dateToStr } from '../../../utils/dateToStr';


const AdForm = ({ action, button }) => {

  const date = dateToStr(new Date());

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState('');
  const [published, setPublished] = useState(date);
  const [updated, setUpdated] = useState(date);
  const [author, setauthor] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('draft');

  //const { register, handleSubmit, formState: { errors } } = useForm();

  const changePrise = value => {
    if(!Number.isNaN(value)) setPrice(parseInt(value));
  };

  const onSubmit = e => {
    e.preventDefault();
    action({ title, content, price, location, images, published, updated, author, phone, status });
  };


  return (
    <div className={styles.formContainer}>
      <h2>Add new ad</h2>
      <form onSubmit={e => onSubmit(e)}>
        <label><span>Title</span>
          <input className={styles.textInput} type='text' value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        <label><span>Content</span>
          <textarea className={styles.textareaInput} value={content} onChange={e => setContent(e.target.value)}/>
        </label>
        <label><span>Price*</span>
          <input className={styles.numberInput} type='number' value={price} onChange={e => changePrise(e.target.value)}/>
        </label>
        <label><span>Location*</span>
          <input className={styles.textInput} type='text' value={location} onChange={e => setLocation(e.target.value)}/>
        </label>
        <label><span>Email</span>
          <input className={styles.textInput} type='text' value={author} onChange={e => setauthor(e.target.value)}/>
        </label>
        <label><span>Phone*</span>
          <input className={styles.textInput} type='text' value={phone} onChange={e => setPhone(e.target.value)}/>
        </label>
        <label><span>Status</span>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value='draft'>Draft</option>
            <option value='published'>Published</option>
          </select>
        </label>
        <label><span>Image*</span>
          <input type='file'/>
        </label>
        <Button type='button' action='submit' name={button} />
      </form>
      <p>* - not required</p>
    </div>
  );
};

AdForm.propTypes = {
  button: PropTypes.string,
  action: PropTypes.func,
};

export default AdForm;
