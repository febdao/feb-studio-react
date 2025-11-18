import { useState } from 'react'
import './App.css'
import Album from './components/Album'
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
      <div className="flex flex-col items-center justify-center h-screen">
        {Object.keys(albums).map((album) => (
          <button className="btn btn-neutral m-2" key={album} onClick={() => {
            setSelectedAlbum(albums[album])
            setToggler(!toggler)
          }}>{albums[album].name}</button>
        ))}
      </div>
      {selectedAlbum && <Album album={selectedAlbum} />}
    </div>
  )
}

export default App
