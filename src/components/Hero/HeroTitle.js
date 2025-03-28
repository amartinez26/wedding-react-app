
/**
 * HeroTitle Component
 *
 * This component renders a title and a dynamic typed text effect.
 * It uses the `data-aos` attribute for animation on scroll and displays
 * a blinking cursor effect for the typed text.
 *
 * @param {Object} props - The props object.
 * @param {string} props.name - The name to be displayed as the title.
 * @param {string} props.typedItems - A comma-separated string of items to be used for the typed text effect.
 *
 * @returns {JSX.Element} The rendered HeroTitle component.
 */
import React from 'react'

const HeroTitle = ({ name, typedItems }) => {
  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <h2>{name}</h2>
      <p>
        I'm{' '}
        <span className="typed" data-typed-items={typedItems}>
          {typedItems.split(',')[0]}
        </span>
        <span
          className="typed-cursor typed-cursor--blink"
          aria-hidden="true"
        ></span>
      </p>
    </div>
  )
}

export default HeroTitle
