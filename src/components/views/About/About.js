import React from 'react';
import styles from './About.module.scss';
import clsx from 'clsx';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.banner}>
      <h1>TOYS PARADISE</h1>
    </div>
    <div className={clsx(styles.about)} id='About'>
      <h1>ABOUT OUR COMPANY</h1>
      <div className={clsx(styles.aboutContainer)}>
        <p>Toys Paradise is a chain of 26 stationary stores with toys for children, which we have been developing since 1996. We started as many projects - as a result of the need and the impossibility of satisfying it on the market. In the mid-90s, the founders of Toys Paradise had small children, and the range of toys available on the market was as small as they were. And that's how it started! Today, for almost 25 years, we have been bringing a smile to the faces of the youngest in Poland! You will find only safe, certified toys that undergo rigorous tests. We work with fantastic producers, often with a long tradition and presence on the market. Our offer includes toys for children, including: ride-ons, pushers, bath toys, educational and wooden toys for children; games, puzzles, hero figures and Schleich figures; dolls, toy cars and vehicles; LEGO and COBI bricks; sports and outdoor toys, such as paddling pools, inflatable and garden pools, kitchens and children's houses, bicycles and scooters! We focus on proven producers with many years of tradition and history, we work with: LEGO, MGA Entertainment, Clementoni, Simba, Smoby, Dickie, Mattel, Fisher Price, Trefl, Ravensburger, Melissa & Doug, Lisciani, Little Tikes, CzuCzu, Zapf Creation, Hasbro, TY Inc., Bayer, eKids, and many others. Our offer includes toys from TM Toys, Dante and Askato. Your children's favorite heroes are on our shelves in brick-and-mortar stores and here in the online store. We offer toys with heroes: Paw Patrol, Frozen, Trolls, toys with Peppa Pig, Super Wngs characters, Fireman Sam and Masha and the Bear, as well as toys with Mickie and Minnie Mouse, and Tomek and Friends, Winnie the Pooh, and heroes. Cars fairy tales. The store's offer also includes: LOL Surprise and LOL OMG toys, Minecraft, Fortnite, toys and accessories licensed from Harry Potter, Super Mario or Star Wars!</p>
        <img src='https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='about'/>
      </div>
    </div>
  </div>
);

export {
  Component as About,
  Component as AboutComponent,
};