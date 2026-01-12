import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.jsx'
import BookingPage from './pages/BookingPage.jsx'
import PricingPage from './pages/PricingPage.jsx'
import PolicyPage from './pages/PolicyPage.jsx'
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
        element: <BookingPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'policy',
        element: <PolicyPage />,
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
