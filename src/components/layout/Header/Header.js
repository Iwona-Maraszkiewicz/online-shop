import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HashLink } from 'react-router-hash-link';
import styles from './Header.module.scss';

const Component = ({ className }) => {

  return (
    <nav className={clsx(className, styles.navigation_bar)}>
      <div className={clsx(className, styles.header_column)}>
        <HashLink to='/' smooth>Toys shop</HashLink>
      </div>
      <div className={clsx(className, styles.header_column)}>
        <HashLink to='/' smooth>Home</HashLink>
        <HashLink to='/about' smooth>About</HashLink>
        <HashLink to='/shop' smooth>Shop</HashLink>
        <HashLink to='/contact' smooth>Contact</HashLink>
      </div>
      <div className={clsx(className, styles.header_column)}>
        <HashLink to='/cart' smooth>Order</HashLink>
      </div>
    </nav>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  //Container as ProductsList,
  Component as HeaderComponent,
};