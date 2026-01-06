import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import './App.css'
import AlbumCover from './components/AlbumCover'
import Hero from './components/Hero'
import Header from './components/Header'
import { getPhotoTypes, formatPhotoTypeLabel, PHOTO_TYPE_STYLES } from './utils/utils'


function App() {
  const albums = useSelector((state) => state.albums.albums)
  const heroPhotos = useSelector((state) => state.albums.featuredPhotos)
  const photoTypes = useMemo(() => getPhotoTypes(albums), [albums])
  const [selectedType, setSelectedType] = useState('all')
  const filteredAlbums = Object.fromEntries(
    Object.entries(albums).filter(([, album]) => {
      if (selectedType === 'all') return true
      return Array.isArray(album.tags) && album.tags.includes(selectedType)
    }),
  )

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
  }, [photoTypes, albums])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const currentType = params.get('type')
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

    if (!shouldUpdate) return

    const queryString = params.toString()
    const newUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`
    window.history.replaceState({}, '', newUrl)
  }, [selectedType])

  return (
    <div data-theme="corporate">
      <div className="main-content">
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
                <div className="content-grid__item" key={albumKey} >
                  <Link to={`/album/${albumKey}`}>
                    <AlbumCover album={filteredAlbums[albumKey]} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
