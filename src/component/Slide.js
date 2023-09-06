import React from 'react'
import PropTypes from 'prop-types'
import Cta from './Cta';

const Slide = ({id, label, images, bgStyle}) => {
  const totalImage = images.length;
  console.log('labe component: ', label);

  return (
    <div className='slide' id={id}>
      <div className={`slide__items bg bg--${bgStyle}`}>
        {images.map((image, index) => (
          <div key={index} className='slide__item' style={{
            backgroundImage: `url(${image})`,
            animationDuration: `${totalImage * 6}s`
          }}>
          </div>
        ))}
      </div>
      <div className='background-animate'></div>
      <div className='slide__content'>
        <h2 className='slide__title'>{label}</h2>
        <Cta />
      </div>
    </div>
  )
}

Slide.propTypes = {
}

export default Slide
