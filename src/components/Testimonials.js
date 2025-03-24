import React from 'react'

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          {/* Swiper Wrapper */}
          <div className="swiper-wrapper">
            {/* Testimonial Items */}
            {[
              {
                text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
                img: 'assets/img/testimonials/testimonials-1.jpg',
                name: 'Saul Goodman',
                title: 'Ceo & Founder',
              },
              {
                text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
                img: 'assets/img/testimonials/testimonials-2.jpg',
                name: 'Sara Wilsson',
                title: 'Designer',
              },
              {
                text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
                img: 'assets/img/testimonials/testimonials-3.jpg',
                name: 'Jena Karlis',
                title: 'Store Owner',
              },
              {
                text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
                img: 'assets/img/testimonials/testimonials-4.jpg',
                name: 'Matt Brandon',
                title: 'Freelancer',
              },
              {
                text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
                img: 'assets/img/testimonials/testimonials-5.jpg',
                name: 'John Larson',
                title: 'Entrepreneur',
              },
            ].map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.text}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <img
                    src={testimonial.img}
                    className="testimonial-img"
                    alt={testimonial.name}
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.title}</h4>
                </div>
              </div>
            ))}
            {/* End Testimonial Items */}
          </div>
          {/* End Swiper Wrapper */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
