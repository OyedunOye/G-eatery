import React, { useRef } from 'react';
import{ BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) =>{
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft +=300;
    }
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Just some random text. I really need it to be a bit long but don't really have a nice idea of what to write here yet. I'll be back with some nice ideas!</p>
      <button type='button' className='custom__button'>View more</button>
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef} >
        {galleryImages.map((image,index) =>(
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
            <img src={image} alt='gallery' />
            <BsInstagram className='gallery__image-icon' />
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrow'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>(scroll('left'))}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>(scroll('irght'))}/>
      </div>
    </div>
  </div>
);

}

export default Gallery;
