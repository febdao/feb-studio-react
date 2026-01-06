import { configureStore } from '@reduxjs/toolkit'
import AlbumsReducer from './slices/AlbumsSlice'

const store = configureStore({
  reducer: {
    albums: AlbumsReducer,
  },
});

export default store