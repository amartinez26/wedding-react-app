
/**
 * ServiceList component renders a list of services.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Array} props.services - An array of service objects to be displayed.
 * @param {string} props.services[].icon - The icon representing the service.
 * @param {string} props.services[].title - The title of the service.
 * @param {string} props.services[].description - A brief description of the service.
 * @param {number} props.services[].delay - The delay time for animations or transitions.
 * @returns {JSX.Element} A React component that displays a list of services.
 */
import React from 'react'
import ServiceItem from './ServiceItem'
import { Link } from 'react-router-dom'; // Import Link from React Router

const ServiceList = ({ services }) => {
  return (
    <div className="row">
      {services.map((service, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay={service.delay}
        >
          <Link to={service.link} className="icon-box">
            {' '}
            {/* Use Link here */}
            <div className="icon">
              <i className={service.icon}></i>
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ServiceList
