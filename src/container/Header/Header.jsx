import React from 'react';
import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading  title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}} >This is the short story about this restaurant. Just some random groups of characters to describe what is the design looking like. This is a good place to eat, with numerous fictitious dishes from other planets or whatever you can think of!</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_image'>
      <img src={ images.welcome } alt='header_img' />
    </div>
  </div>
);

export default Header;
