// Description: Contact component that displays a contact form and information items
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import InfoItem from './InfoItem'
import ContactForm from './ContactForm'
import HotelReservationLink from './HotelReservationLink' 

const Contact = () => {
  const sectionTitle = {
    title: 'RSVP HERE FIRST!',
    description:
      'Than click the link below to book your room and secure your spot in paradise!',
  }

  const infoItems = [
    {
      icon: 'bi bi-geo-alt',
      title: 'Address',
      content:
        'Privada, Supermanzana 11 Manzana 9 Lote 10, 77580 Puerto Morelos, Q.R., Mexico',
      delay: 200,
    },
    {
      icon: 'bi bi-telephone',
      title: 'Call Us',
      content: '+1 5589 55488 55',
      delay: 300,
    },
    {
      icon: 'bi bi-envelope',
      title: 'Email Us',
      content: 'info@example.com',
      delay: 400,
    },
  ]

  return (
    <section id="contact" className="contact section">
      <SectionTitle
        title={
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOXUVUafRevXEn6d86qdpfYlQemdSQc6w-QC79KLJ5p0NSVg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-button" // Apply the CSS class
          >
            {sectionTitle.title}
          </a>
        }
        description={sectionTitle.description}
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-7">
            <HotelReservationLink
              hotelName="Dreams Sapphire Resort"
              hotelImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ed/09/98/main-pool.jpg?w=500&h=-1&s=1" // Add the URL of the hotel image
              icon="bi bi-house-door"
              title="Reserve Your Hotel Room"
              link="https://requests.paradiseweddings.com/sites/carla-and-antonio/login"
              description="We've secured the best rates just for you!"
              delay={100}
            />
          </div>
          <div className="col-lg-5">
            <div className="info-wrap">
              {infoItems.map((item, index) => (
                <InfoItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  delay={item.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
