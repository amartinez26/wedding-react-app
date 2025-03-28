
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
    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`${icon} flex-shrink-0`}></i>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default InfoItem
