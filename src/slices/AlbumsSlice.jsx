import { createSlice } from '@reduxjs/toolkit'
import data from '../data.json'
import { fetchImages } from '../utils/utils'

const buildAlbumsWithPhotos = (baseAlbums = {}) =>
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
  )

const featuredPhotos = data.featured ? fetchImages('featured') : []

const initialState = {
  albums: buildAlbumsWithPhotos(data.albums),
  featured: data.featured ?? null,
  featuredPhotos,
}

const AlbumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload
    },
    setFeatured: (state, action) => {
      state.featured = action.payload
    },
  },
})

export const { setAlbums, setFeatured } = AlbumsSlice.actions

export default AlbumsSlice.reducer
