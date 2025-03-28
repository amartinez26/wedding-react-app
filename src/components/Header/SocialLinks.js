/**
 * SocialLinks Component
 * 
 * This component renders a list of social media links as anchor elements.
 * Each link is represented by an icon and is styled using the provided class names.
 * 
 * Props:
 * @param {Object[]} links - An array of link objects to be displayed.
 * @param {string} links[].href - The URL for the social media link.
 * @param {string} links[].className - The CSS class name for styling the link.
 * @param {string} links[].icon - The CSS class name for the icon to be displayed inside the link.
 * 
 * Example usage:
 * <SocialLinks 
 *   links={[
 *     { href: 'https://facebook.com', className: 'facebook-link', icon: 'fab fa-facebook' },
 *     { href: 'https://twitter.com', className: 'twitter-link', icon: 'fab fa-twitter' }
 *   ]}
 * />
 */
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
