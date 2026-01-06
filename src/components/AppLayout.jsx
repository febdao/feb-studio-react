import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isAlbumRoute = location.pathname.startsWith('/album')
    if (isAlbumRoute) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.search])

  return null
}

export default function AppLayout() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Outlet />
    </>
  )
}
