
/**
 * PortfolioItem Component
 * 
 * This component represents a single portfolio item that displays an image, title, 
 * description, and provides links for previewing the image or navigating to more details.
 * 
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.filter - A CSS class used for filtering portfolio items.
 * @param {string} props.img - The URL of the image to display in the portfolio item.
 * @param {string} props.title - The title of the portfolio item.
 * @param {string} props.description - A brief description of the portfolio item.
 * 
 * @returns {JSX.Element} A JSX element representing the portfolio item.
 */
import React from 'react'

const PortfolioItem = ({ filter, img, title, description }) => {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item isotope-item ${filter}`}>
      <div className="portfolio-content h-100">
        <img src={img} className="img-fluid" alt={title} />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <a
            href={img}
            title={title}
            data-gallery={`portfolio-gallery-${filter}`}
            className="glightbox preview-link"
          >
            <i className="bi bi-zoom-in"></i>
          </a>
          <a
            href="portfolio-details.html"
            title="More Details"
            className="details-link"
          >
            <i className="bi bi-link-45deg"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
