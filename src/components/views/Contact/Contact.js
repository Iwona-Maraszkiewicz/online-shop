import React from 'react';
import styles from './Contact.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.banner}>
      <h1>TOYS PARADISE</h1>
    </div>
    <h2 className={styles.subTitle}>LOREM IPSUM</h2>
    <h4 className={styles.text}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h4>

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