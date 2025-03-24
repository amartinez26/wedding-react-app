import React from 'react'

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links text-center">
      {links.map((link, index) => (
        <a key={index} href={link.href} className={link.className}>
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
