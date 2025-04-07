
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
import Typed from 'typed.js'
import React, { useEffect, useRef } from 'react'

const HeroTitle = ({ name, typedItems }) => {
  const typedRef = useRef(null) // Reference for the typed element
  const cursorRef = useRef(null) // Reference for the cursor element

  useEffect(() => {
    const options = {
      strings: typedItems.split(','), // Split the typedItems string into an array
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of backspacing
      backDelay: 1500, // Delay before backspacing
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop the typing effect
    }

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options)

    // Cleanup on component unmount
    return () => {
      typed.destroy()
    }
  }, [typedItems])

  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <h2>{name}</h2>
      <p>
        {/* You can add text that will be static here */}
        <span ref={typedRef} className="typed"></span>
        <span
          ref={cursorRef}
          className="typed-cursor typed-cursor--blink"
          aria-hidden="true"
        ></span>
      </p>
    </div>
  )
}

export default HeroTitle
