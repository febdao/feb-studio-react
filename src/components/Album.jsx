function Album({ album }) {
  const { photos, name, description} = album
  return (
    <div className="album">
      <div className="album__content mb-5 p-10">
        <h2 className="album__title block-title text-5xl mb-5">{name}</h2>
        <p className="album__description text-2xl">{description}</p>
      </div>
      {photos.map((photo) => (
        <div key={photo} className="album__item">
          <img className="album__image" src={photo} alt="hero" />
        </div>
      ))}
    </div>
  )
}

export default Album
