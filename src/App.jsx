import { useState } from 'react'
import './App.css'
import Album from './components/Album'
import AlbumCover from './components/AlbumCover'
import Hero from './components/Hero'
import data from './data.json'
import CTA from './components/CTA'
import fetchImages from './utils/fetchImages'

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
        <div className="dock dock-lg">
          <div>
            <img className="dock__logo" src="images/logo.png" alt="logo" />
          </div>
          
          <div>
            <CTA />
          </div>
          
          <div className="doc__phone">
            <a href="sms:+61468939034?body=Hi FebStudio">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAECUlEQVR4nO2du2tUURDGPzW7KAnaaBGNYqV2ioUPsFAQQdCIJoXYihBJ/CMEjWAjKnZWIRYKahErtbBRQ4xGfMfCiIhFwFdWjAHdlWNmYTOc3b3P7Hj3+8FAYO+Ze858e157z50AhBBCCCGEEEIIIYQQQgghxJED0A1gEMBrAD8AlGioZQWJlYtZl8QwEQ4AeGuggaX/3FwMO+MIsRDAGQMNKWXIigD6JbahoRhIzU5HGaaKyskvAOcBbAXQGkXhJqNVYnVBYqd7yv6gjnKeOeMjgI3p1j/TbJIYVsZ0POhE3+3pGRQjGVF0T3Grr7oMqkJumCLJcFHFdiBIoTeq0JaEKkOAbSq2bp9Sl4Iq1JZ+PZuGNhXbqSCF9BKNJEvo+FKQdKEgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxqAgxjAjSB5AH4BhORvs7CGAXvksa/5MC7ISwBOP77I9BtCeIX+mBcnXaWzZRgMeHLPuz7wgfQEaW7bjGfBnXpBh5W8IwCqxIfXZgwz4My+IPuflGlqmI8I5pYJxf+YFmVL+XCPjNHjKuD/zglQbElxjbyU4xHQY8WdekN4Qk2ZPBvyZFyQv6/h6jR0JsUy17M+8IJBN1WiNxj4KufFqN+7PvCCQb5dbx9+XlU1B/u6J+M3LGfdnXhAyCwUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxBgUxRuj46nNKTGCWHEtVbL8HKcQUf8ZS/OkkmC7vLGlgEkxfmliX4pTEw8VwRsX2UJxEyhSlQYmUIVn8darxGelybhzkRF8fF6PtEjPdM1xs9yEk/Z4lWhT7AGBP2JtjNjf6p4TqYM1ORYjHv3+p0O/pKVHsXch7LwEwaSBwSVtRxFiAGHTKeBe3MstC3POogeAlbeNRhqlq5CRxvFumvfK8dRTENoe431MDAYxrBYnVgKymkjwfHIkRVUH3P0mCsNcz3LWkXNem4J4K7JEAZVoAPE/hzVfieR3sWIAyJ1SZCQCL56GuTcHNkD1kg2duOjxPdW0K9MuUu2tc63rBmLr+btzlIZm7h/mqAryuyrU5T2/6BmDNPNc502xRAZ6s8m1fBOCqZ/N0sAF1zjSXVZCve65ZDuCOZ/1+sgH1zTTrAUyrILu9RSW7ALz3iHGpQXXOLHl5c7UyyGMVw9VaAFeq7GzPcRJPFjc531BB/gNgh6ywrgH47RFiWrIpkARZ7dmZl+TAxOcav/e45/d88JUwOwF8CfnD208AZ/mgKx1ehBBiRiZul+OQpMSzOiIUZaJ388SKtCpB5g5ZEzI5u0euLwHclqeNXSpDG0Ft/gKdzxtZZN3CAgAAAABJRU5ErkJggg==" alt="sms" />
            </a>
          </div>
        </div>
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
