import React, { useState } from 'react';

import styles from './AdForm.module.scss';

const AdForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  console.log(price + 12);

  const changePrise = value => {
    if(!Number.isNaN(value)) setPrice(parseInt(value));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add new ad</h2>
      <form>
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
          <input className={styles.textInput} type='text' value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label><span>Phone*</span>
          <input className={styles.textInput} type='text' value={phone} onChange={e => setPhone(e.target.value)}/>
        </label>
        <label><span>Image*</span>
          <input type='file' />
        </label>
      </form>
      <p>* - not required</p>
    </div>
  );
};

export default AdForm;
