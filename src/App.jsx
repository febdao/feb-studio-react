import { useEffect, useState } from 'react'
import './App.css'
import Album from './components/Album'
import data from './data.json'

function App() {
  const { albums } = data
  const [selectedAlbum, setSelectedAlbum] = useState(albums.featured)
  const [toggler, setToggler] = useState(false)
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
      <Album title={selectedAlbum.name} images={selectedAlbum.images} toggler={toggler} />
    </div>
  )
}

export default App
