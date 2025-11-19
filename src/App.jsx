import { useState } from 'react'
import './App.css'
import Album from './components/Album'
import AlbumCover from './components/AlbumCover'
import Hero from './components/Hero'
import data from './data.json'

function App() {
  const { albums } = data
  console.log('albums: ', albums)
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [toggler, setToggler] = useState(false)
  const heroPhotos = albums.featured.photos

  return (
    <div data-theme="autumn">
      <Hero photos={heroPhotos} />
      <div className="content bg-amber-50 content p-10 md:p-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-10 md:mb-20 block-title">Our <span>projects</span></h2>
          <div className="content-grid">
            {Object.keys(albums).map((album) => (
              <div className="content-grid__item" key={album} onClick={() => {
                setSelectedAlbum(albums[album])
                setToggler(!toggler)
              }}>
                <AlbumCover album = {albums[album]} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {toggler && <div className='content-popup'>
        <button className='content-popup__close' onClick={() => setToggler(!toggler)}>
          Back
        </button>
        {selectedAlbum && <Album album={selectedAlbum} />}
      </div>}
      
    </div>
  )
}

export default App
