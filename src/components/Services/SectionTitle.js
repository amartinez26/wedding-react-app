
/**
 * SectionTitle Component
 * 
 * This component renders a section title with a heading and an optional description.
 * It uses the "fade-up" animation effect from AOS (Animate On Scroll) library.
 * 
 * @param {Object} props - The props object.
 * @param {string} props.title - The title to be displayed as a heading.
 * @param {string} [props.description] - An optional description to be displayed below the title.
 * 
 * @returns {JSX.Element} A container with a title and description.
 */
import React from 'react'

const SectionTitle = ({ title, description }) => {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionTitle
