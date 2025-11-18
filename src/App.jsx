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
      <div className="bg-amber-50 content p-10 md:p-20 lg:p-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.keys(albums).map((album) => (
              <div key={album} onClick={() => {
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
