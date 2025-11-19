function AlbumCover({ album }) {
  const { photos, name, description } = album
  const coverPhoto =
    photos.length > 0
      ? photos[Math.floor(Math.random() * photos.length)]
      : ''
  return (
    <div className="album-cover">
      <img src={coverPhoto} alt="album-cover" />
      <div className="album-cover__content">
        <h2 className="album-cover__title">{name}</h2>
        <p className="album-cover__description text-white">{description}</p>
      </div>
    </div>
  )
}

export default AlbumCover
