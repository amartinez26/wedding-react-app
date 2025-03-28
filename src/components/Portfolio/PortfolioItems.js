
/**
 * PortfolioItems Component
 * 
 * This component renders a list of portfolio items inside a responsive grid layout.
 * Each item is passed to the `PortfolioItem` component for rendering.
 * 
 * Props:
 * @param {Object[]} items - An array of portfolio item objects to be displayed.
 * @param {string} items[].filter - The filter category for the portfolio item.
 * @param {string} items[].img - The image URL for the portfolio item.
 * @param {string} items[].title - The title of the portfolio item.
 * @param {string} items[].description - A brief description of the portfolio item.
 * 
 * @returns {JSX.Element} A grid layout containing the portfolio items.
 */
import React from 'react'
import PortfolioItem from './PortfolioItem'

const PortfolioItems = ({ items }) => {
  return (
    <div
      className="row gy-4 isotope-container"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {items.map((item, index) => (
        <PortfolioItem
          key={index}
          filter={item.filter}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default PortfolioItems
