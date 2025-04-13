
/**
 * Services component renders a section of the webpage that displays a list of services.
 * 
 * This component includes:
 * - A section title with a heading and description.
 * - A list of services, each containing an icon, title, description, and animation delay.
 * 
 * The `sectionTitle` object defines the title and description for the section.
 * The `services` array contains the details of each service to be displayed.
 * 
 * Dependencies:
 * - SectionTitle: A component for rendering the section's title and description.
 * - ServiceList: A component for rendering the list of services.
 * 
 * @component
 * @returns {JSX.Element} The rendered Services section.
 */
import React from 'react'
import SectionTitle from './SectionTitle'
import ServiceList from './ServiceList'

const Services = () => {
  const sectionTitle = {
    title: 'Explore Around Mexico',
    description:
      ' Click on the links below to explore all the amazing activities we’ve handpicked just for you to check out! ',
  }

const services = [
  {
    icon: 'bi bi-briefcase',
    title: 'Lorem Ipsum',
    description:
      'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    delay: 100,
    link: 'https://www.google.com', // Add the link for this service
  },
  {
    icon: 'bi bi-card-checklist',
    title: 'Dolor Sitema',
    description:
      'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
    delay: 200,
    link: '/dolor-sitema', // Add the link for this service
  },
  {
    icon: 'bi bi-bar-chart',
    title: 'Sed ut perspiciatis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    delay: 300,
    link: '/sed-ut-perspiciatis', // Add the link for this service
  },
  {
    icon: 'bi bi-binoculars',
    title: 'Magni Dolores',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    delay: 400,
    link: '/magni-dolores', // Add the link for this service
  },
  {
    icon: 'bi bi-brightness-high',
    title: 'Nemo Enim',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
    delay: 500,
    link: '/nemo-enim', // Add the link for this service
  },
  {
    icon: 'bi bi-calendar4-week',
    title: 'Eiusmod Tempor',
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
    delay: 600,
    link: '/eiusmod-tempor', // Add the link for this service
  },
]

  return (
    <section id="services" className="services section">
      <SectionTitle
        title={sectionTitle.title}
        description={sectionTitle.description}
      />
      <div className="container">
        <ServiceList services={services} />
      </div>
    </section>
  )
}

export default Services
