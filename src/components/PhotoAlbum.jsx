import React, { useState } from 'react'
import { ColumnsPhotoAlbum } from 'react-photo-album'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/columns.css"

function PhotoAlbum({ photos }) {
  const [index, setIndex] = useState(-1)
  console.log('photos', photos)
  return (
    <div>
      <ColumnsPhotoAlbum 
        photos={photos} 
        columns={4} 
        onClick={({ index: current }) => setIndex(current)} 
        targetRowHeight={150}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
      />
    </div>
  )
}

export default PhotoAlbum