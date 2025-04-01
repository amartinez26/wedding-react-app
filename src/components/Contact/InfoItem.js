
/**
 * @file InfoItem.js
 * @description A React functional component that renders an information item with an icon, title, and content. 
 *              It supports animation on scroll (AOS) with a customizable delay.
 * @module components/Contact/InfoItem
 */

/**
 * InfoItem Component
 * @param {Object} props - The props object.
 * @param {string} props.icon - The CSS class for the icon to be displayed.
 * @param {string} props.title - The title text for the information item.
 * @param {string} props.content - The content text for the information item.
 * @param {number} props.delay - The delay in milliseconds for the AOS animation.
 * @returns {JSX.Element} A JSX element representing an information item.
 */
import React from 'react'

const InfoItem = ({ icon, title, content, delay }) => {
  return (
    <div className="info-item" data-aos="fade-up" data-aos-delay={delay}>
      <i className={icon}></i>
      <h4>{title}</h4>
      {title === 'Address' ? (
        <div>
          <p>{content}</p>
          {/* Embed Google Map */}
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBbpDj0n3bkx0YBNwwyga5HkxXGUkHY0UE&q=${encodeURIComponent(
              content
            )}`}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <p>{content}</p>
      )}
    </div>
  )
}

export default InfoItem
