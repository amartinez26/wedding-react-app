
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
    icon: 'bi bi-binoculars',
    title: 'Things to Do in Puerto Morelos',
    description:
      "15 must-do experiences in Puerto Morelos, Mexico! From snorkeling with dolphins, ziplining adventures, ATV rides, exploring cenotes, here's ultimate guide to make your trip unforgettable.",
    delay: 100,
    link: 'https://www.tripadvisor.com/Attractions-g240327-Activities-Puerto_Morelos_Yucatan_Peninsula.html', // Add the link for this service
  },
  {
    icon: 'bi bi-brush',
    title: 'Local Art and Culture',
    description:
      'For the artist in you, here are the local spots where art and culture come alive! From the vibrant Galería Arte Zissimo to the charming Alma Libre Bookstore, every corner is packed with creativity and stories waiting to be discovered.',
    delay: 200,
    link: 'https://www.tripadvisor.com/Collections-e3ldgS5Gk55p4qnVzsdgusu.html', // Add the link for this service
  },
  {
    icon: 'bi bi-cart',
    title: 'Shopping in Playa del Carmen',
    description:
      'Not to far is Playa del Carmen, a shopper’s paradise! offering everything from high-end boutiques to local artisan markets. Explore the vibrant Fifth Avenue for trendy shops, or visit the local markets for unique souvenirs.',
    delay: 300,
    link: 'https://www.tripadvisor.com/Attractions-g150812-Activities-c26-Playa_del_Carmen_Yucatan_Peninsula.html', // Add the link for this service
  },
  // {
  //   icon: 'bi bi-briefcase',
  //   title: 'Magni Dolores',
  //   description:
  //     'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //   delay: 400,
  //   link: '/magni-dolores', // Add the link for this service
  // },
  // {
  //   icon: 'bi bi-brightness-high',
  //   title: 'Nemo Enim',
  //   description:
  //     'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
  //   delay: 500,
  //   link: '/nemo-enim', // Add the link for this service
  // },
  // {
  //   icon: 'bi bi-calendar4-week',
  //   title: 'Eiusmod Tempor',
  //   description:
  //     'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
  //   delay: 600,
  //   link: '/eiusmod-tempor', // Add the link for this service
  // },
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
