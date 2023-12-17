import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Health is wealth.</p>
        </div>
        <p className='p__opensans'>We care about healthy lifestyle and take all precautions to make you healthy meals that will nourish your body and soul, get you ready for work, and keep you out of the hospital.</p>

      </div>

      <div className='app__chef-sign'>
        <p>kevin luo</p>
        <p className='p__opensans'>Chef & founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
    
  </div>
);

export default Chef;
