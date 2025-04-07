// Description: Contact component that displays a contact form and information items
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import InfoItem from './InfoItem'
import ContactForm from './ContactForm'

const Contact = () => {
  const sectionTitle = {
    title: 'Contact',
    description:
      'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
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
        title={sectionTitle.title}
        description={sectionTitle.description}
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
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
          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
