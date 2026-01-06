import { useParams } from "react-router";
import Header from "./Header"

export default function AlbumPage() {
  const { album } = useParams();

  return (
    <div>
      <Header />
      <div className="album-page">
        <div className="album-page__content">
          <div className="album-page__content__header">
            <h1 className="album-page__content__header__title">Album Page</h1>
          </div>
          <div className="album-page__content__body">
            <p>This is the album page of {album}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
