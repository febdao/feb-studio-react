import React from 'react'
import Slide from './component/Slide'
import Nav from './component/Nav';

const imageFeatured = require.context('./sections/featured', true);
const imageWedding = require.context('./sections/wedding', true);
const imageFamily = require.context('./sections/family', true);
const imagePortrait = require.context('./sections/portrait', true);
const imageEvent = require.context('./sections/event', true);

const getImages = (images) => {
  return images.keys().map(image => images(image));
}

const sections = [
  {
    id: 'featured',
    label: 'Feb Studio',
    desc: '<span class="offer-icon"></span> September Special: $100 for a 1-hour session with 10 edited and unlimited raw photos.',
    images: getImages(imageFeatured),
    style: 'green',
  },
  {
    id: 'wedding',
    label: 'Wedding',
    images: getImages(imageWedding),
    style: 'secondary',
  },
  {
    id: 'family',
    label: 'Family',
    images: getImages(imageFamily),
    style: 'primary',
  },
  {
    id: 'portrait',
    label: 'Portrait',
    images: getImages(imagePortrait),
    style: 'orange',
  },
  {
    id: 'event',
    label: 'Event',
    images: getImages(imageEvent),
    style: 'yellow',
  },
]

const App = () => {
  return (
    <div>
      <div className='page-slider'>
        {sections.map((section) => {
          return <Slide key={section.id} id={section.id} images={section.images} desc={section.desc} label={section.label} bgStyle={section.style}/>
        })}
      </div>
      <div className='page-nav'>
        <Nav sections={sections} />
      </div>
    </div>
  )
}

export default App
