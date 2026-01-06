import CopyButton from "./CopyButton"
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import Header from "./Header"

function Album() {
  const { album } = useParams();
  const albumData = useSelector((state) => state.albums.albums[album]);
  const { photos, name, description, location, tags } = albumData

  return (
    <>
      <Header />
      <div className="album">
        <div className="album__content mb-5 p-10">
          <h2 className="album__title block-title text-5xl mb-5"><span>{name}</span></h2>
          { description && <p className="album__description text-2xl">{description}</p>}
          { location && <p className="album__location mt-4">⚑ {location}</p>}
          { tags && <p className="album-cover__tags capitalize mt-4 badge badge-neutral badge-outline">{tags.join(', ')}</p>}
          <div className="mt-4">
            <CopyButton />
          </div>
        </div>
        {photos.map((photo) => (
          <div key={photo} className="album__item">
            <img className="album__image" src={photo} />
          </div>
        ))}
      </div>
      <Link to="/" className="content-popup__back btn">
        Back
      </Link>      
    </>
  )
}

export default Album
