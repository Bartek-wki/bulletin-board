import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/userRedux';

import styles from './AdForm.module.scss';

import Button from '../../common/Button/Button';
import { dateToStr } from '../../../utils/dateToStr';


const AdForm = ({ action, button }) => {
  const user = useSelector(state => getUser(state));

  const date = dateToStr(new Date());

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState(null);
  const [published, setPublished] = useState(date);
  const [updated, setUpdated] = useState(date);
  const [author, setauthor] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('draft');
  const [error, setError] = useState({ title: '', content: '', author: '' });

  const changePrise = value => {
    if (!Number.isNaN(value)) setPrice(parseInt(value));
  };

  const onSubmit = e => {
    e.preventDefault();

    let err = {
      title: null,
      content: null,
      author: null,
    };

    if (title.length < 10) err.title = 'error';
    else if (content.length < 20) err.content = 'error';
    else if (author !== user.email) err.author = 'error';

    if (!err.title && !err.content && !err.author) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('price', price);
      formData.append('published', published);
      formData.append('updated', updated);
      formData.append('author', author);
      formData.append('phone', phone);
      formData.append('status', status);
      formData.append('location', location);
      formData.append('file', images);

      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }

      action(formData);
    } else setError(values => ({ ...values, title: err.title, content: err.content, author: err.author }));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add new ad</h2>
      <form onSubmit={e => onSubmit(e)}>
        <label><span>Title</span>
          <input className={styles.textInput} type='text' value={title} onChange={e => setTitle(e.target.value)} />
          {error.title && <span className={styles.error}>This field needs to contain at least 10 characters</span>}
        </label>
        <label><span>Content</span>
          <textarea className={styles.textareaInput} value={content} onChange={e => setContent(e.target.value)} />
          {error.content && <span className={styles.error}>This field needs to contain at least 20 characters</span>}
        </label>
        <label><span>Price*</span>
          <input className={styles.numberInput} type='number' value={price} onChange={e => changePrise(e.target.value)}/>
        </label>
        <label><span>Location*</span>
          <input className={styles.textInput} type='text' value={location} onChange={e => setLocation(e.target.value)}/>
        </label>
        <label><span>Email</span>
          <input className={styles.textInput} type='text' value={author} onChange={e => setauthor(e.target.value)} />
          {error.author && <span className={styles.error}>This field needs to contain your email address</span>}
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
          <input type='file' onChange={e => setImages(e.target.files[0])}/>
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
