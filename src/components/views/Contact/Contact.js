import React from 'react';
import styles from './Contact.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.banner}>
      <h1>TOYS PARADISE</h1>
    </div>
    <div className={styles.Contact}>
        <h3>CONTACT</h3>
        <p>Poland, Warsaw, Włodarzewska 2061/87</p>
        <a href='tel:+22-60-78-78'>tel. 22-60-78-78</a>
        <a href='mailto:mail@mail.com'>toys@paradise.pl</a>
    </div>
    <div className={styles.logoWrapper}>                                         
        <div className={styles.icon}>
          <a href='http://www.facebook.com'><i className="fab fa-facebook-square"></i></a>
          <a href='http://www.instagram.com'><i className="fab fa-instagram"></i></a>
          <a href='http://www.twitter.com'><i className="fab fa-twitter"></i></a>
        </div>        
    </div>
  </div>
);


export {
  Component as Contact,
  Component as ContactComponent,
};