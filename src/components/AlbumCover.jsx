function AlbumCover({ album }) {
  const { photos, name, description, location, tags } = album
  const coverPhoto =
    photos.length > 0
      ? photos[Math.floor(Math.random() * photos.length)]
      : ''
  return (
    <div className="hover-3d">
      <div className="album-cover">
        <img src={coverPhoto} alt="album-cover" />
        <div className="album-cover__content text-center">
          <h2 className="album-cover__title">{name}</h2>
          <p className="album-cover__description text-white text-xl">{description}</p>
          { location && <p className="album-cover__location mt-4 text-blue-100 px-1">⚑ {location}</p>}
          { tags && <p className="album-cover__tags capitalize mt-4 text-blue-100 badge badge-neutral badge-outline">{tags.join(', ')}</p>}
        </div>
      </div>
    </div>
  )
}

export default AlbumCover
