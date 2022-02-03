import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.link}><Link to='/'>BACK TO HOME</Link></div>
    <div className={styles.imageWrapper}>
      <img src='https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg' alt='' />
    </div>
  </div>
);

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
