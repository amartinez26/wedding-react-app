import React from 'react'

const ProfileImage = ({ src, alt }) => {
  return (
    <div className="profile-img">
      <img src={src} alt={alt} className="img-fluid rounded-circle" />
    </div>
  )
}

export default ProfileImage
