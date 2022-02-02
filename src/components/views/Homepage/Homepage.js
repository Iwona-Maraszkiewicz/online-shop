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
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
        
  };

  return (
    <div className={styles.root}>
      
        <div className={styles.logoWrapper}>                                           
                     
            <div className={styles.icon}>
              <a href='http://www.facebook.com'><i className="fab fa-facebook-square"></i></a>
              <a href='http://www.instagram.com'><i className="fab fa-instagram"></i></a>
              <a href='http://www.twitter.com'><i className="fab fa-twitter"></i></a>
            </div>
         
        </div>
      
      <Slider {...settings} className={styles.slider}>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/3068579/pexels-photo-3068579.jpeg?cs=srgb&dl=pexels-maria-georgieva-3068579.jpg&fm=jpg'></img>
          <div className={styles.title}>INTERACTIVE</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-386025.jpg&fm=jpg'></img>
          <div className={styles.title}>POPULAR</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/8409849/pexels-photo-8409849.jpeg?cs=srgb&dl=pexels-hanna-auramenka-8409849.jpg&fm=jpg'></img>
          <div className={styles.title}>EDUCATIONAL</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?cs=srgb&dl=pexels-pixabay-264907.jpg&fm=jpg'></img>
          <div className={styles.title}>FOR LITTLE BABIES</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?cs=srgb&dl=pexels-moose-photos-1037995.jpg&fm=jpg'></img>
          <div className={styles.title}>VERY INTERESTING</div>
        </div>
        
      </Slider>
      <div className={styles.sliderContent}>
        <div className={styles.wrapper}>
          <div className={styles.topContent}>
            <h1>TOYS PARADISE</h1>
            
          </div>          
        </div>
      </div> 
      {/*<div className={styles.bottomContent}>
        <Button
          className={styles.button}
          variant='contained'
          color='primary'
          component={Link}
          to={'/shop'}
        >
            BUY NOW
        </Button>
  </div>*/}
      <ContainerPlus>
        <div className={styles.productsWrapper}>
          <h1> TOYS IN OUR SHOP </h1>
          <div className={styles.boxesWrapper}>
            {products.map(data => 
              <Box key={data._id} data={data} />
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
