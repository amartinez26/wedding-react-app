
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

const ServiceList = ({ services }) => {
  return (
    <div className="row gy-4">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          delay={service.delay}
        />
      ))}
    </div>
  )
}

export default ServiceList
