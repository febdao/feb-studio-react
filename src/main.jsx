import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.jsx'
import Booking from './components/Booking.jsx'
import Album from './components/Album.jsx'
import AppLayout from './components/AppLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
      {
        path: 'album/:album',
        element: <Album />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
