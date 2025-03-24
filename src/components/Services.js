import React from 'react'

const Services = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {/* Service Items */}
          {[
            {
              icon: 'bi bi-briefcase',
              title: 'Lorem Ipsum',
              description:
                'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
              delay: 100,
            },
            {
              icon: 'bi bi-card-checklist',
              title: 'Dolor Sitema',
              description:
                'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
              delay: 200,
            },
            {
              icon: 'bi bi-bar-chart',
              title: 'Sed ut perspiciatis',
              description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
              delay: 300,
            },
            {
              icon: 'bi bi-binoculars',
              title: 'Magni Dolores',
              description:
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
              delay: 400,
            },
            {
              icon: 'bi bi-brightness-high',
              title: 'Nemo Enim',
              description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
              delay: 500,
            },
            {
              icon: 'bi bi-calendar4-week',
              title: 'Eiusmod Tempor',
              description:
                'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
              delay: 600,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="icon flex-shrink-0">
                <i className={service.icon}></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="service-details.html" className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
          {/* End Service Items */}
        </div>
      </div>
    </section>
  )
}

export default Services
