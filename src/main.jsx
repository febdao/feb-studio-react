import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import App from './App.jsx'
import Booking from './components/Booking.jsx'
import AlbumPage from './components/AlbumPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/booking',
    element: <Booking />,
  },
  {
    path: '/album/:album',
    element: <AlbumPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
