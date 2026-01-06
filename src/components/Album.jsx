import { useEffect } from "react"
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import CopyButton from "./CopyButton"
import Header from "./Header"
import { updateMetaTags } from "../utils/utils";

function Album() {
  const { album } = useParams();
  const albumData = useSelector((state) => state.albums.albums[album]);
  
  useEffect(() => {
    if (!albumData) return
    updateMetaTags(
      {
        ...albumData,
        coverPhoto: albumData.coverPhoto,
      },
      album
    )
    return () => {
      updateMetaTags(null)
    }
  }, [albumData, album])

  if (!albumData) {
    return (
      <>
        <Header />
        <div className="album">
          <div className="container mx-auto py-20 text-center">
            <h2 className="text-3xl font-bold">Album not found</h2>
            <Link to="/" className="btn mt-5">
              Go back home
            </Link>
          </div>
        </div>
      </>
    )
  }

  const { photos, name, description, location, coverPhoto } = albumData

  return (
    <>
      <Header />
      <div className="album">
        <div className="album__content mb-5 p-10" style={{backgroundImage: `url(${coverPhoto})`}}>
          <div className="container mx-auto">
            <h2 className="album__title block-title text-5xl mb-5"><span>{name}</span></h2>
            { description && <p className="album__description text-2xl">{description}</p>}
            { location && <p className="album__location mt-4">⚑ {location}</p>}
            <div className="mt-4">
              <CopyButton />
              <Link to="/" className="btn btn-sm btn-info ml-1">
                Back
              </Link>      
            </div>
          </div>
        </div>
        <div className="album__photos">
          <div className="container mx-auto">
            {photos.map((photo) => (
              <div key={photo} className="album__item">
                <img className="album__image" src={photo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="/" className="content-popup__back btn">
        Back
      </Link>      
    </>
  )
}

export default Album
