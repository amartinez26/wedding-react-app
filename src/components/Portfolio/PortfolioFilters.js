
/**
 * PortfolioFilters Component
 * 
 * This component renders a list of portfolio filters as an unordered list. 
 * Each filter is represented as a list item with dynamic classes and attributes 
 * based on the provided `filters` prop.
 * 
 * @param {Object} props - The props object.
 * @param {Array} props.filters - An array of filter objects to be displayed.
 * @param {string} props.filters[].filter - The data-filter attribute value for the filter.
 * @param {string} props.filters[].label - The label text for the filter.
 * @param {boolean} props.filters[].active - Determines if the filter is active.
 * 
 * @returns {JSX.Element} The rendered PortfolioFilters component.
 */
import React from 'react'

const PortfolioFilters = ({ filters }) => {
  return (
    <ul
      className="portfolio-filters isotope-filters"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {filters.map((filter, index) => (
        <li
          key={index}
          data-filter={filter.filter}
          className={filter.active ? 'filter-active' : ''}
        >
          {filter.label}
        </li>
      ))}
    </ul>
  )
}

export default PortfolioFilters
