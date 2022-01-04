import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QuantityButton } from '../../common/QuantityButton/QuantityButton';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartBox.module.scss';

const Component = ({ data }) => {
  const { image, price, name, quantity, id} = data;
  const [quantityState, setQuantityState] = useState(quantity);
  return (
    <div className={styles.root}>
      <div className={styles.leftWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} alt=''></img>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <h4>{name}</h4>
        <h4>${price}</h4>
        <QuantityButton quantity={quantityState} setQuantity={setQuantityState} cart={true} id={id} />
      </div>
    </div>
  );

};

Component.propTypes = {
  data: PropTypes.object, 
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartBox,
  // Container as CartBox,
  Component as CartBoxComponent,
};