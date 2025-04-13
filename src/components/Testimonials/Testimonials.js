
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
      'In case you needed more of a reason to come, but let’s be honest, you’re already coming.',
  }

  const testimonials = [
    {
      text: 'We had such a good time! The staff Victor at Indigo Pool, Jose at the Preferred Pool and Alfredo at the Hibachi all made our stay very enjoyable. Beds were comfy, food was good at all places we ate and we will be back. Thanks Dreams Staff, you are the best!',
      img: testimonial1Img, // Use the imported image
      name: 'Lisa Goodman',
      title: 'April 2025 Guest',
    },
    {
      text: 'Fantastic resort. Excellent food. Eleuterio at Bordeaux restaurant was my favourite. Everything on the resort is easily accessible and their concerts were great too. The sky bar was something to see as well. Amazing views and worth experiencing!',
      img: testimonial2Img, // Use the imported image
      name: 'Gabe Betancourt',
      title: 'April 2025 Guest',
    },
    {
      text: 'Alberto and his team, Omar, Geremias, and Martin gave us 10/10 service at the World Cafe. Made our experience incredible. Alberto is the best!!! Happy, energetic and everything you want in a server. The Resort overall was lovely. Good food. Clean. Good vibes. Would come back again.',
      img: testimonial3Img, // Use the imported image
      name: 'Jena Reyes',
      title: 'March 2025 Guest',
    },
    {
      text: "It's very nice place to go, very secure, the pool area has waiters/waitresses that come around, they have activities on and off at the pool area which was nice. They have entertainment in the evenings for people to enjoy also. It was a very nice place to stay! Highly recommend",
      img: testimonial4Img, // Use the imported image
      name: 'Matt Harvey',
      title: 'February 2025 Guest',
    },
    {
      text: 'We were at Dreams Sapphire from February 20th to 27th, 2025. It was a very nice week. Beautiful spring very well maintained, very clean. Nice room and clean. Excellent service everywhere. All the staff at this place are wonderful and smiling. The staff seems happy to work at this hotel. The food is excellent. The Indigo section is a big wow with its beautiful pool and excellent service. Special thanks to Mr Armando Arroyo for your warm welcome. This place is a real favorite.',
      img: testimonial5Img, // Use the imported image
      name: 'John Larson',
      title: 'February 2025 Guest',
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
