const imageModules = import.meta.glob(
  '../../public/images/*/*.{jpeg,jpg,png,webp}',
  {
    eager: true,
    import: 'default',
  },
)

const folderCache = new Map()

function fetchImages(folderName) {
  if (folderCache.has(folderName)) {
    return folderCache.get(folderName)
  }

  const folderSegment = `/images/${folderName}/`
  const images = Object.entries(imageModules)
    .filter(([path]) => path.includes(folderSegment))
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
    )
    .map(([, src]) => src)

  folderCache.set(folderName, images)
  return images
}

const PHOTO_TYPE_STYLES = {
  all: 'btn btn-outline btn-neutral filter-reset',
  family: 'btn btn-outline btn-accent',
  event: 'btn btn-outline btn-primary',
  portrait: 'btn btn-outline btn-error',
}

const formatPhotoTypeLabel = (tag) =>
  tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const getPhotoTypes = (albums) => {
  const tagSet = new Set()

  Object.values(albums).forEach(({ tags }) => {
    if (!Array.isArray(tags)) return
    tags.forEach((tag) => tagSet.add(tag))
  })

  return ['all', ...tagSet]
}

export { fetchImages, getPhotoTypes, formatPhotoTypeLabel, PHOTO_TYPE_STYLES }