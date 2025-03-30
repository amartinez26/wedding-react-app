
/**
 * Testimonials Component
 *
 * This component renders a testimonials section for a webpage. It includes a section title
 * and a list of testimonials displayed in a swiper carousel. The testimonials data is 
 * hardcoded as an array of objects, each containing text, image, name, and title of the person.
 *
 * @component
 * @returns {JSX.Element} A section element containing the testimonials.
 */
import React, { startTransition } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import TestimonialList from './TestimonialList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

// Import images for testimonials
import testimonial1Img from '../../assets/img/testimonials/testimonials-1.jpg';
import testimonial2Img from '../../assets/img/testimonials/testimonials-2.jpg';
import testimonial3Img from '../../assets/img/testimonials/testimonials-3.jpg';
import testimonial4Img from '../../assets/img/testimonials/testimonials-4.jpg';
import testimonial5Img from '../../assets/img/testimonials/testimonials-5.jpg';

const Testimonials = () => {
  const sectionTitle = {
    title: 'Testimonials',
    description:
      'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
  }

  const testimonials = [
    {
      text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
      img: testimonial1Img, // Use the imported image
      name: 'Saul Goodman',
      title: 'Ceo & Founder',
    },
    {
      text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
      img: testimonial2Img, // Use the imported image
      name: 'Sara Wilsson',
      title: 'Designer',
    },
    {
      text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      img: testimonial3Img, // Use the imported image
      name: 'Jena Karlis',
      title: 'Store Owner',
    },
    {
      text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
      img: testimonial4Img, // Use the imported image
      name: 'Matt Brandon',
      title: 'Freelancer',
    },
    {
      text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
      img: testimonial5Img, // Use the imported image
      name: 'John Larson',
      title: 'Entrepreneur',
    },
  ]

 return (
   <section id="testimonials" className="testimonials section light-background">
     <SectionTitle
       title={sectionTitle.title}
       description={sectionTitle.description}
     />
     <div
       className="container testimonials-carousel"
       data-aos="fade-up"
       data-aos-delay="100"
     >
       <Swiper
         modules={[Pagination, Autoplay]}
         spaceBetween={30}
         pagination={{ clickable: true }}
         autoplay={{
           delay: 5000, // 10 seconds
           disableOnInteraction: false, // Keep autoplay running even after user interaction
           auseOnMouseEnter: true, // Pause autoplay on mouse enter
         }}
         className="testimonials-slider"
       >
         {testimonials.map((testimonial, index) => (
           <SwiperSlide key={index}>
             <div className="testimonial-item">
               <p>
                 <i className="quote-icon-left">“</i>
                 {testimonial.text}
                 <i className="quote-icon-right">”</i>
               </p>
               <img
                 src={testimonial.img}
                 alt={testimonial.name}
                 className="testimonial-img"
               />
               <h3>{testimonial.name}</h3>
               <h4>{testimonial.title}</h4>
             </div>
           </SwiperSlide>
         ))}
       </Swiper>
     </div>
   </section>
 )
};

export default Testimonials;
