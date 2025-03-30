import React from 'react';

const PortfolioFilters = ({ filters, onFilterChange }) => {
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
          onClick={() => onFilterChange(filter.filter)} // Notify parent about filter change
        >
          {filter.label}
        </li>
      ))}
    </ul>
  );
};

export default PortfolioFilters;
