import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './AdForm.module.scss';

import Button from '../../common/Button/Button';
import { dateToStr } from '../../../utils/dateToStr';


const AdForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const date = dateToStr(new Date());

  const { register, handleSubmit, formState: { errors } } = useForm();

  const changePrise = value => {
    if(!Number.isNaN(value)) setPrice(parseInt(value));
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add new ad</h2>
      <form onSubmit={handleSubmit(e => onSubmit(e))}>
        <label><span>Title</span>
          <input className={styles.textInput} type='text' value={title} onChange={e => setTitle(e.target.value)} useFormRegister = {{...register('title', { required: true, minLength: 10 })}} />
          {errors.title && <span className={styles.error}>This field requires at least 10 characters</span>}
        </label>
        <label><span>Content</span>
          <textarea className={styles.textareaInput} value={content} onChange={e => setContent(e.target.value)} useFormRegister = {{...register('content', { required: true, minLength: 20 })}}  />
          {errors.content && <span className={styles.error}>This field requires at least 20 characters</span>}
        </label>
        <label><span>Price*</span>
          <input className={styles.numberInput} type='number' value={price} onChange={e => changePrise(e.target.value)} useFormRegister = {{...register('price')}} />
        </label>
        <label><span>Location*</span>
          <input className={styles.textInput} type='text' value={location} onChange={e => setLocation(e.target.value)} useFormRegister = {{...register('price')}} />
        </label>
        <label><span>Email</span>
          <input className={styles.textInput} type='text' value={email} onChange={e => setEmail(e.target.value)} useFormRegister = {{...register('email', { required: true })}}  />
          {errors.email && <span className={styles.error}>This field is required</span>}
        </label>
        <label><span>Phone*</span>
          <input className={styles.textInput} type='text' value={phone} onChange={e => setPhone(e.target.value)} useFormRegister = {{...register('phone')}} />
        </label>
        <label><span>Image*</span>
          <input type='file' useFormRegister = {{...register('image')}} />
        </label>
        <Button type='button' action='submit' name='Add ad!' />
      </form>
      <p>* - not required</p>
    </div>
  );
};

export default AdForm;
