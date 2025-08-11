import { useEffect, useState } from 'react'
import './App.css'
import Album from './components/Album'
import PhotoAlbum from './components/PhotoAlbum'
import data from './data.json'

function App() {
  const { albums } = data
  const [selectedAlbum, setSelectedAlbum] = useState(albums.featured)
  const [toggler, setToggler] = useState(false)
  const photos = selectedAlbum.images.map((image) => ({
    src: image,
    width: 1000,
    height: 1000,
  }))

  console.log('photos', photos)

  useEffect(() => {
    console.log(selectedAlbum)
  }, [selectedAlbum])
  return (
    <div data-theme="autumn">
      <div className="flex flex-col items-center justify-center h-screen">
        {Object.keys(albums).map((album) => (
          <button className="btn btn-neutral m-2" key={album} onClick={() => {
            setSelectedAlbum(albums[album])
            setToggler(!toggler)
          }}>{albums[album].name}</button>
        ))}
      </div>
      {/* <Album title={selectedAlbum.name} images={selectedAlbum.images} toggler={toggler} /> */}
      {photos.length > 0 && <PhotoAlbum photos={photos} />}
    </div>
  )
}

export default App
