import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Header from './Header'

const siteMeta = {
  name: 'Feb Studio',
  baseUrl: 'https://feb.studio',
  image: 'https://feb.studio/images/cover.jpg',
  keywords:
    'canberra photography, photo studio canberra, wedding photographer canberra, family portraits, event photography, newborn photography, feb studio',
  defaultDescription:
    'Feb Studio is a professional photography studio in Canberra capturing weddings, families, events, and portraits. We turn your best moments into timeless memories.',
}

const routeMeta = {
  '/': {
    title: 'Feb Studio | Canberra Photography & Creative Studio',
    description: siteMeta.defaultDescription,
  },
  '/booking': {
    title: 'Booking | Feb Studio',
    description:
      'Book a photography session with Feb Studio in Canberra. Choose your package and secure your date.',
  },
  '/pricing': {
    title: 'Pricing | Feb Studio',
    description:
      'View Feb Studio photography packages and pricing for Canberra sessions and events.',
  },
  '/policy': {
    title: 'Policies | Feb Studio',
    description:
      'Read Feb Studio booking, payment, delivery, and usage policies for sessions and events.',
  },
  '/contract': {
    title: 'Contract Generator | Feb Studio',
    description:
      'Generate a photography services agreement to send to your Feb Studio clients.',
  },
}

const getMetaForPath = (pathname) => {
  if (pathname.startsWith('/album/')) {
    return {
      title: 'Album | Feb Studio',
      description: 'Browse a photo album from Feb Studio in Canberra.',
    }
  }

  return routeMeta[pathname] ?? routeMeta['/']
}

const ensureMetaTag = (attrName, attrValue, content) => {
  if (!content) return
  const selector = `meta[${attrName}="${attrValue}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attrName, attrValue)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const ensureCanonical = (url) => {
  if (!url) return
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

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
  useEffect(() => {
    if (typeof document === 'undefined') return
    const meta = getMetaForPath(location.pathname)
    const url = `${siteMeta.baseUrl}${location.pathname || '/'}`

    document.title = meta.title
    ensureMetaTag('name', 'description', meta.description)
    ensureMetaTag('name', 'keywords', siteMeta.keywords)
    ensureCanonical(url)

    ensureMetaTag('property', 'og:type', 'website')
    ensureMetaTag('property', 'og:title', meta.title)
    ensureMetaTag('property', 'og:description', meta.description)
    ensureMetaTag('property', 'og:url', url)
    ensureMetaTag('property', 'og:image', siteMeta.image)
    ensureMetaTag('property', 'og:site_name', siteMeta.name)

    ensureMetaTag('property', 'twitter:card', 'summary_large_image')
    ensureMetaTag('property', 'twitter:title', meta.title)
    ensureMetaTag('property', 'twitter:description', meta.description)
    ensureMetaTag('property', 'twitter:url', url)
    ensureMetaTag('property', 'twitter:image', siteMeta.image)
  }, [location.pathname])

  return (
    <>
      <ScrollToTopOnRouteChange />
      {!isHomePage && <Header />}
      <Outlet />
    </>
  )
}
