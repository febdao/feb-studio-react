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

export default fetchImages
