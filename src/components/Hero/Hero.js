
/**
 * Hero component that renders a hero section with an image and a title.
 * 
 * This component uses the `HeroImage` and `HeroTitle` subcomponents to display
 * a background image and a title with animated typed text, respectively.
 * 
 * @component
 * @returns {JSX.Element} The rendered Hero section.
 */
import React from 'react'
import HeroImage from './HeroImage'
import HeroTitle from './HeroTitle'
import heroBg from '../../assets/img/portfolio/WeddingShoot/running-mega-mall.webp' // Adjust the path as needed


const Hero = () => {
  const heroImage = {
    src: heroBg,
    alt: 'Hero Background',
    aos: 'fade-in',
  }

  const heroTitle = {
    name: 'We\'ll say...',
    typedItems:
      'I do, and dance into forever, —where love begins, and happily ever after never ends.',
  }

  return (
    <section id="hero" className="hero section dark-background">
      <HeroImage src={heroImage.src} alt={heroImage.alt} aos={heroImage.aos} />
      <HeroTitle name={heroTitle.name} typedItems={heroTitle.typedItems} />
    </section>
  )
}

export default Hero
