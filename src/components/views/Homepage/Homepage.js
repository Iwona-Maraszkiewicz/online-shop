import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Box } from '../../features/Box/Box';

import { connect } from 'react-redux';
import { getAll, fetchProducts } from '../../../redux/productsRedux';
import { Container as ContainerPlus } from '@material-ui/core';
import styles from './Homepage.module.scss';

const Component = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);
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
          <div className={styles.title}>Interactive</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-386025.jpg&fm=jpg'></img>
          <div className={styles.title}>Popular</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/8409849/pexels-photo-8409849.jpeg?cs=srgb&dl=pexels-hanna-auramenka-8409849.jpg&fm=jpg'></img>
          <div className={styles.title}>Educational</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?cs=srgb&dl=pexels-pixabay-264907.jpg&fm=jpg'></img>
          <div className={styles.title}>For babies</div>
        </div>
      </Slider>
      <div className={styles.sliderContent}>
        <div className={styles.wrapper}>
          <div className={styles.topContent}>
            <h1>TOYS PARADISE</h1>
          </div>          
        </div>
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
      <ContainerPlus>
        <div className={styles.productsWrapper}>
          <h1> Our products </h1>
          <div className={styles.boxesWrapper}>
            {products.map(data => 
              <Box key={data._id} {...data} />
            )}
          </div>
        </div>
      </ContainerPlus>
    </div>
  );
};

Component.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAll(state),
});
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
