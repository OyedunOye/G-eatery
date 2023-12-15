import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex_overlay'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon_img' />
        <p className='p__opensans'>Awa omo oduduwa ile adulawo gbe tiwa de. Ounje aladun lorisirisi ni a mo wa si. E wa je mukundun ohun a nta!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon_img' />
          <p className='p__opensans'>Awa omo oduduwa ile adulawo gbe tiwa de. Ounje aladun lorisirisi ni a mo wa si. E wa je mukundun ohun a nta!</p>
          <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
    AboutUs
  </div>
);

export default AboutUs;
