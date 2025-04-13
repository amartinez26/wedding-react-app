/**
 * @file HotelReservationLink.js
 * @description A React functional component that renders a link for hotel reservations with an icon, title, description, and an optional hotel image.
 *              It supports animation on scroll (AOS) with a customizable delay.
 * @module components/Contact/HotelReservationLink
 */

/**
 * HotelReservationLink Component
 * @param {Object} props - The props object.
 * @param {string} props.hotelName - The name of the hotel.
 * @param {string} props.hotelImage - The URL of the hotel image.
 * @param {string} props.icon - The CSS class for the icon to be displayed.
 * @param {string} props.title - The title text for the link.
 * @param {string} props.link - The URL for the hotel reservation.
 * @param {string} props.description - A brief description of the reservation link.
 * @param {number} props.delay - The delay in milliseconds for the AOS animation.
 * @returns {JSX.Element} A JSX element representing a hotel reservation link.
 */
import React from 'react'

const HotelReservationLink = ({
  hotelName,
  hotelImage,
  icon,
  title,
  link,
  description,
  delay,
}) => {
  return (
    <div
      className="hotel-reservation-link"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h3 className="hotel-name">{hotelName}</h3>{' '}
      {/* Add hotel name as a header */}
      {hotelImage && (
        <img
          src={hotelImage}
          alt={`${hotelName} Image`}
          className="hotel-image"
        />
      )}
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="reservation-link"
      >
        Reserve Now
      </a>
    </div>
  )
}

export default HotelReservationLink
