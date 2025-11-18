function Album({ album }) {
  const { photos, name} = album
  console.log('photos', photos)
  return (
    <div className="album">
      <h2 className="album__title block-title text-5xl mb-10 mt-5">{name}</h2>
      {photos.map((photo) => (
        <div key={photo} className="album__item">
          <img className="album__image" src={photo} alt="hero" />
        </div>
      ))}
    </div>
  )
}

export default Album
