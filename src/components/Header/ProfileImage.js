
/**
 * ProfileImage Component
 * 
 * This component renders a profile image inside a div container. 
 * The image is styled with a "rounded-circle" class for circular appearance 
 * and "img-fluid" for responsive behavior.
 * 
 * Props:
 * @param {string} src - The source URL of the profile image.
 * @param {string} alt - The alternative text for the profile image.
 * 
 * Usage:
 * This component is typically used to display a user's profile picture 
 * in a circular format within a React application.
 */
import React from 'react'

const ProfileImage = ({ src, alt, loading = 'lazy'}) => {
  return (
    <div className="profile-img">
      <img src={src} alt={alt} loading={loading} className="img-fluid rounded-circle" />
    </div>
  )
}

export default ProfileImage
