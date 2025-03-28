
/**
 * TestimonialItem Component
 * 
 * This component renders a single testimonial item, including the testimonial text,
 * an image of the person, their name, and their title. It is designed to be used
 * within a swiper slider for displaying multiple testimonials.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The testimonial text to display.
 * @param {string} props.img - The URL of the image representing the person giving the testimonial.
 * @param {string} props.name - The name of the person giving the testimonial.
 * @param {string} props.title - The title or designation of the person giving the testimonial.
 * 
 * @returns {JSX.Element} A JSX element representing a testimonial item.
 */
import React from 'react'

const TestimonialItem = ({ text, img, name, title }) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <p>
          <i className="bi bi-quote quote-icon-left"></i>
          <span>{text}</span>
          <i className="bi bi-quote quote-icon-right"></i>
        </p>
        <img src={img} className="testimonial-img" alt={name} />
        <h3>{name}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default TestimonialItem
