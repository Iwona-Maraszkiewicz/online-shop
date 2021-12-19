import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={styles.root}>

      <Slider {...settings} className={styles.slider}>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/3068579/pexels-photo-3068579.jpeg?cs=srgb&dl=pexels-maria-georgieva-3068579.jpg&fm=jpg'></img>
          <h4>Interactive</h4>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-386025.jpg&fm=jpg'></img>
          <h4>Popular</h4>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/8409849/pexels-photo-8409849.jpeg?cs=srgb&dl=pexels-hanna-auramenka-8409849.jpg&fm=jpg'></img>
          <h4>Educational</h4>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?cs=srgb&dl=pexels-pixabay-264907.jpg&fm=jpg'></img>
          <h4>For babies</h4>
        </div>
      </Slider>
      <div className={styles.sliderContent}>
        <div className={styles.wrapper}>
          <div className={styles.topContent}>
            <h1>TOYS PARADISE</h1>
          </div>
          <div className={styles.bottomContent}>
            <Button
              className={styles.button}
              variant='contained'
              color='primary'
              component={Link}
              to={'/shop'}
            >
            START SHOPPING
            </Button>

          </div>
        </div>

      </div>
    </div>

  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
