function AlbumCover({ album }) {
  const { photos, name} = album
  return (
    <div className="album-cover">
      <img src={photos[0]} alt="album-cover" />
      <div className="album-cover__content">
        <h2 className="album-cover__title">{name}</h2>
      </div>
    </div>
  )
}

export default AlbumCover
