import React, { useEffect } from 'react'
import FsLightbox from 'fslightbox-react'

const Album = ({ title, images, toggler }) => {
  useEffect(() => {
    console.log('images', images)
  }, [images])

  useEffect(() => {
    console.log('toggler', toggler)
  }, [toggler])

  return (
    <div>
      <h1>{title}</h1>
      <FsLightbox
        sources={images}
        toggler={toggler}
      />
    </div>
  )
}

export default Album
