function Album({ album }) {
  const { photos, name, description, location} = album
  return (
    <div className="album">
      <div className="album__content mb-5 p-10">
        <h2 className="album__title block-title text-5xl mb-5">{name}</h2>
        { description && <p className="album__description text-2xl">{description}</p>}
        { location && <p className="album__location mt-4">⚑ {location}</p>}
      </div>
      {photos.map((photo) => (
        <div key={photo} className="album__item">
          <div className="hover-3d">
            <img className="album__image" src={photo} alt="hero" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Album
