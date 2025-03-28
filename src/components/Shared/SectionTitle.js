
/**
 * SectionTitle Component
 * 
 * This component renders a section title with a heading and a description.
 * It is styled with a container and includes an animation effect using the `data-aos` attribute.
 * 
 * @param {Object} props - The props object.
 * @param {string} props.title - The title to be displayed as a heading.
 * @param {string} props.description - The description text to be displayed below the title.
 * 
 * @returns {JSX.Element} A React component that displays a section title and description.
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