
/**
 * 
 * This file defines a React functional component named `ProfileImage`.
 * The component is used to render a responsive image within a Bootstrap column layout.
 * It accepts `src` and `alt` as props to specify the image source and alternative text.
 */
import React from 'react'

const ProfileImage = ({ src, alt }) => {
  return (
    <div className="col-lg-4">
      <img src={src} className="img-fluid" alt={alt} />
    </div>
  )
}

export default ProfileImage
