import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Album from './components/Album'
import AlbumCover from './components/AlbumCover'
import Hero from './components/Hero'
import data from './data.json'
import Header from './components/Header'
import { fetchImages, getPhotoTypes, formatPhotoTypeLabel, PHOTO_TYPE_STYLES, updateMetaTags } from './utils/utils'
import Booking from './components/Booking'


function App() {
  const { albums: baseAlbums = {}, featured } = data
  const albums = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(baseAlbums).map(([albumKey, album]) => {
          const photosFromFolder = fetchImages(albumKey)
          const photos = photosFromFolder.length ? photosFromFolder : []
          const coverPhoto = photos.length > 0 ? photos[Math.floor(Math.random() * photos.length)] : '/images/cover.jpg'
          return [
            albumKey,
            {
              ...album,
              photos,
              coverPhoto,
            },
          ]
        }),
      ),
    [baseAlbums],
  )
  const photoTypes = useMemo(() => getPhotoTypes(albums), [albums])
  const [selectedAlbumKey, setSelectedAlbumKey] = useState(null)
  const [selectedType, setSelectedType] = useState('all')
  const [toggler, setToggler] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const heroPhotos = featured ? fetchImages('featured') : []
  const filteredAlbums = Object.fromEntries(
    Object.entries(albums).filter(([, album]) => {
      if (selectedType === 'all') return true
      return Array.isArray(album.tags) && album.tags.includes(selectedType)
    }),
  )
  const selectedAlbum =
    selectedAlbumKey && albums[selectedAlbumKey] ? albums[selectedAlbumKey] : null
  const closeAlbum = () => {
    setSelectedAlbumKey(null)
    setToggler(false)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    const params = new URLSearchParams(window.location.search)
    const typeParam = params.get('type')
    if (typeParam && photoTypes.includes(typeParam)) {
      setSelectedType((current) => (current === typeParam ? current : typeParam))
    }
    const albumParam = params.get('album')
    if (albumParam && albums[albumParam]) {
      setSelectedAlbumKey((current) =>
        current === albumParam ? current : albumParam,
      )
      setToggler(true)
    }
    if (params.get('booking') === 'true') {
      setIsBookingOpen(true)
    }
  }, [photoTypes, albums])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const currentType = params.get('type')
    const currentAlbum = params.get('album')
    const currentBooking = params.get('booking')
    let shouldUpdate = false
    
    if (selectedType === 'all') {
      if (currentType) {
        params.delete('type')
        shouldUpdate = true
      }
    } else {
      if (currentType !== selectedType) {
        params.set('type', selectedType)
        shouldUpdate = true
      }
    }
    
    if (toggler && selectedAlbumKey) {
      if (currentAlbum !== selectedAlbumKey) {
        params.set('album', selectedAlbumKey)
        shouldUpdate = true
      }
    } else if (currentAlbum) {
      params.delete('album')
      shouldUpdate = true
    }

    if (isBookingOpen) {
      if (currentBooking !== 'true') {
        params.set('booking', 'true')
        shouldUpdate = true
      }
    } else {
      if (currentBooking) {
        params.delete('booking')
        shouldUpdate = true
      }
    }

    if (!shouldUpdate) return

    const queryString = params.toString()
    const newUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`
    window.history.replaceState({}, '', newUrl)
  }, [selectedType, toggler, selectedAlbumKey, isBookingOpen])

  useEffect(() => {
    const modal = document.getElementById('booking-form')
    if (isBookingOpen) {
      modal.showModal()
    } else {
      modal.close()
    }
  }, [isBookingOpen])

  useEffect(() => {
    updateMetaTags(selectedAlbum, selectedAlbumKey)
  }, [selectedAlbum, selectedAlbumKey])

  return (
    <div data-theme="corporate">
      <div className={`main-content ${toggler ? 'is-inactive' : ''}`}>
        <Hero photos={heroPhotos} />
        <Header />
        <div className="content bg-amber-50 content px-3 py-10 md:px-5 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold text-center mb-4 md:mb-10 block-title">Our <span>{formatPhotoTypeLabel(selectedType)}</span> Projects</h2>
            <div className="project-filter hidden md:flex justify-center mb-5 md:mb-10">
              <div className="flex gap-1">
                {photoTypes.map((type) => {
                  const baseStyle = PHOTO_TYPE_STYLES[type] ?? 'btn'
                  const buttonStyle = selectedType === type 
                    ? baseStyle.replace('btn-outline', '') 
                    : baseStyle

                  return (
                    <button
                      key={type}
                      type="button"
                      className={buttonStyle}
                      onClick={() => setSelectedType(type)}
                    >
                      {formatPhotoTypeLabel(type)}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="project-filter--mobile flex justify-center md:hidden mb-5 mx-auto">
              <label className="select">
                <span className="label">Filter by: </span>
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                  {photoTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                    aria-label={formatPhotoTypeLabel(type)}
                  >
                    {formatPhotoTypeLabel(type)}
                  </option>
                ))}
                </select>
              </label>
            </div>
            <div className="content-grid">
              {Object.keys(filteredAlbums).map((albumKey) => (
                <div className="content-grid__item" key={albumKey} onClick={() => {
                  setSelectedAlbumKey(albumKey)
                  setToggler(true)
                }}>
                  <AlbumCover album = {filteredAlbums[albumKey]} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <dialog id="booking-form" className="modal" onClose={() => setIsBookingOpen(false)}>
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
        <button className='content-popup__close' onClick={closeAlbum}>
          Back
        </button>
        {selectedAlbum && <Album album={selectedAlbum} />}
        <button className='content-popup__back' onClick={closeAlbum}>
          Back
        </button>
      </div>}
    </div>
  )
}

export default App
