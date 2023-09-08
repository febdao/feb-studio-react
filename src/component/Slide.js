import React from 'react'
import Cta from './Cta';

const Slide = ({id, label, desc, images, bgStyle}) => {
  const totalImage = images.length;

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
        {desc ? (
          <div className='slide__desc' dangerouslySetInnerHTML={{__html: desc}}></div>
        ) : null}
        <Cta />
      </div>
    </div>
  )
}

export default Slide
