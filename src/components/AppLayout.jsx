import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Header from './Header'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Check if the route is not front page
    if (location.pathname !== '/' || location.pathname !== '') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
  }, [location.pathname, location.search])

  return null
}

export default function AppLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname === ''

  return (
    <>
      <ScrollToTopOnRouteChange />
      {!isHomePage && <Header />}
      <Outlet />
    </>
  )
}
