
/**
 * TestimonialList Component
 * 
 * This component renders a list of testimonials by mapping over the provided
 * `testimonials` array and rendering a `TestimonialItem` for each entry.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.testimonials - An array of testimonial objects.
 * @param {string} props.testimonials[].text - The text content of the testimonial.
 * @param {string} props.testimonials[].img - The image URL of the person giving the testimonial.
 * @param {string} props.testimonials[].name - The name of the person giving the testimonial.
 * @param {string} props.testimonials[].title - The title or designation of the person giving the testimonial.
 * 
 * @returns {JSX.Element} A wrapper div containing a list of `TestimonialItem` components.
 */
import React from 'react'
import TestimonialItem from './TestimonialItem'

const TestimonialList = ({ testimonials }) => {
  return (
    <div className="swiper-wrapper">
      {testimonials.map((testimonial, index) => (
        <TestimonialItem
          key={index}
          text={testimonial.text}
          img={testimonial.img}
          name={testimonial.name}
          title={testimonial.title}
        />
      ))}
    </div>
  )
}

export default TestimonialList
