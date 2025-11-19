import { useState } from 'react'
import './App.css'
import Album from './components/Album'
import AlbumCover from './components/AlbumCover'
import Hero from './components/Hero'
import data from './data.json'
import CTA from './components/CTA'
import fetchImages from './utils/fetchImages'
import Booking from './components/Booking'

function App() {
  const { albums: staticAlbums, featured } = data
  const albums = Object.fromEntries(
    Object.entries(staticAlbums).map(([albumKey, album]) => {
      const photosFromFolder = fetchImages(albumKey)
      return [
        albumKey,
        {
          ...album,
          photos: photosFromFolder.length ? photosFromFolder : [],
        },
      ]
    }),
  )

  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [toggler, setToggler] = useState(false)
  const heroPhotos = featured ? fetchImages('featured') : []

  return (
    <div data-theme="autumn">
      <div className={`main-content ${toggler ? 'is-inactive' : ''}`}>
        <Hero photos={heroPhotos} />
        <div className="content bg-amber-50 content p-10 md:p-20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold text-center mb-10 md:mb-20 block-title">Our <span>Projects</span></h2>
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
        
        <div className="dock dock-lg">
          <div>
            <img className="dock__logo" src="images/logo.png" alt="logo" />
          </div>
          
          <div>
            <CTA />
          </div>
          
          <div className="doc__phone">
              <a onClick={()=>document.getElementById('booking-form').showModal()}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2cSUhVURjH/za8RyNBWpFEtigXJW1MooiIimpVm2zVsJBoUIOKBto0EzSYUQiWFIVUBM3ZqkCKNIqMwsJWFRGEqJhmoeWNIycQed+t27tnuPd8PzjweML7/8/3+c743QcwDMMwDMMwDMMwDMMwLpMAcAJAKwCPaF8APAKwB8B404bjRplP4FO17wB2Axhs2nhcaAmYgD/tuvz2MIYSIFpluuJM8CFoYFtiugMuTMJ+7YnpDrhAHoCHPknIMW3QBYYDeE8koMi0OVc4QiSgQvOw51nQmgE0ADgKYCY0UUiY+ax54vcsa70ALgDIhGKm+RgYpGnp61ncmgBkK4x/X5B7CXGRHNcT4AF4A2CYwhz0DTephFc5PAR5A5qYK5VRQYgedmwS9nzaNwCjVSWgiBC9D7eYCOCYTxLWqRLO9zmydpFqIh6nVAkmAXQTohPgHiuIWNxSKfqKEF0G9ygkYnFVpehFQlRc1LjGfiIW5SpFt5rIuqXcJmKxQaXoAkL0HfSR6LeUbZWvTdzQfSRiMVul6BhiR9yrcv37D5s58Z5OxhLB/wVgpGpx6mh6LvTQkkJbvKeTRUQM3uoQv0mIF+sQB70B0sl2wsNlHeJ7CfFzDiXgEuFhpw7x5YT4c4cS8NpkocJkQvwHgKEOJCDpcyKgrXqwmTAgLvHjnoD8kG4H0+IBYWJNCJ+dCPHIWsU+gToVroFGjhMmRGfTpSyEwKvcJ5wO4V4kbVYTJkQNUbq0KEhAmPuExyHcDKbNDMJEG4CMGCcgA0A7oZELjQyR5eoqquXKLB6CphKf3xmwOiQUnhFmxEVFXCfhlTbVyVYSZsROWSUe0XRwkNA+AwNsNnElB7MJuEtor4cB5hBmPsQ4AZ8I7QIYYIQ8/05lKDOGCcgidH/KCnIjNBGmFsYwAYsJ3UYY5AphalsML2R2EH0V9UHG2EWYEuflcbuSrCb6KhJjjKWEKXFeHrdL+Uair2JoMsY4GycmBYiy8x6iryIGRqHK1mchPhQQfRTLUuPUEOY2Ij5sIvp4DxawjzAnqifiwh2ij6LvxpnvMw9MR/TJ89lwzoMFJOU9QCqDL3RUiilklHwkNVXfWjUVIfwTh3x2qPWykiJq5EjvVL8OwCJEOcZXH7OdAE7K8kVRX2orY+SwUi49U/1pt2H5OZC1PoY9Ba0LwDV5SJYOWfJzugJoiztxK6nSnAQPQG2anmsD6p2FxYh70fMGkjDlP/1OCahTZeLu938qB7YE/Ep7lidA9KU0hIoPreTKU9GeCA9B3fK5uCA/x2Adk+RW/oZ8gIHaM9gwCbdJj9elZ+GdYRiGYWJHUi7t6uW2v1O+LpF/i7qe1WQDeOmzwmkI+SfAdOtZTfIvwegflGQE9aynNMBavziCetbzNEBA6iKoZz0dAQLSEUE96+kIEJD2COpZz1MegsxSonlS1K1nPUmfSoOBy8JEBPUiQfZfgqJiI6ZTLxIk5Fe+Tk6UHfJpw2JF/4m69RiGYRiGYRiGYRiGYRi4yW88+RwVc0HRcgAAAABJRU5ErkJggg==" alt="add-shopping-cart" />
            </a>
          </div>
        </div>
        <dialog id="booking-form" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="modal-action mb-4">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
            <Booking />
          </div>
        </dialog>
      </div>
      {toggler && <div className='content-popup'>
        <button className='content-popup__close' onClick={() => setToggler(!toggler)}>
          Back
        </button>
        {selectedAlbum && <Album album={selectedAlbum} />}
        <button className='content-popup__back' onClick={() => setToggler(!toggler)}>
          Back
        </button>
      </div>}
    </div>
  )
}

export default App
