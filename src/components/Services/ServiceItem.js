
/**
 * ServiceItem Component
 * 
 * This component renders a service item with an icon, title, description, and animation delay.
 * It is designed to be used as part of a grid layout for displaying multiple services.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.icon - The CSS class for the icon to be displayed.
 * @param {string} props.title - The title of the service item.
 * @param {string} props.description - A brief description of the service item.
 * @param {number} props.delay - The animation delay in milliseconds for the "data-aos" attribute.
 * 
 * @returns {JSX.Element} A JSX element representing a service item.
 */
import React from 'react'

const ServiceItem = ({ icon, title, description, delay }) => {
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="icon flex-shrink-0">
        <i className={icon}></i>
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {title}
          </a>
        </h4>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default ServiceItem
