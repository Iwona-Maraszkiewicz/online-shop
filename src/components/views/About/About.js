import React from 'react';
import styles from './About.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.banner}>
      <h1>TOYS SHOP</h1>
    </div>
    <h2 className={styles.subTitle}>LOREM IPSUM</h2>
    <h4 className={styles.text}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h4>


  </div>
);


export {
  Component as About,
  Component as AboutComponent,
};