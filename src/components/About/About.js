// Description: This component renders the "About" section of a webpage, including a title, profile image, and content about the individual.
// It uses the `SectionTitle`, `ProfileImage`, and `AboutContent` components to structure the content.
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import ProfileImage from './ProfileImage'
import AboutContent from './AboutContent'
import myProfileImg from '../../assets/img/portfolio/WeddingShoot/pink wall.jpg'

const About = () => {
  const sectionTitle = {
    title: 'Come for the vows, stay for the vibes!',
    description:
      '"Pack your bags, dust off your passports, and get ready for the ultimate wedding-fueled getaway! We’re tying the knot in Puerto Morelos, Mexico—because why settle for a local wedding when you can have tacos, turquoise waters, and tequila? We’re beyond excited to celebrate our big day with all of you in paradise. Think of it as a mini vacation with a side of \'I do.\' So grab your sunscreen, practice your dance moves, and prepare for a wedding that’s as unforgettable as the sunsets in Puerto Morelos (and probably just as dramatic)."',
  }

  const profileImage = {
    src: myProfileImg,
    alt: 'Profile Image',
  }

  const aboutContent = {
    title: 'Random Things You Never Asked to Know About Us!',
    description:
      'Study up—there might be a quiz, and maybe a prize. (Spoiler: there won’t be.)',
    details: [
      [
        { label: 'Birthdates', value: '9 Feb 1988 & 26 Dec 1988' },
        { label: 'Companies', value: 'Airbnb & Ace Hardare' },
        { label: 'Jobs', value: 'Industry Researcher & Software Engineer' },
        { label: 'Residence', value: 'Little Village, Chicago' },
      ],
      [
        { label: 'We Met', value: 'Hinge' },
        { label: 'Length', value: '6 years' },
        { label: 'Preferred Temp', value: '55 & 80' },
        { label: 'Hobbies', value: 'Pottery & DJ' },
      ],
    ],
  }

  return (
    <section id="about" className="about section">
      <SectionTitle
        title={sectionTitle.title}
        description={sectionTitle.description}
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <ProfileImage src={profileImage.src} alt={profileImage.alt} />
          <AboutContent
            title={aboutContent.title}
            description={aboutContent.description}
            details={aboutContent.details}
          />
        </div>
      </div>
    </section>
  )
}

export default About
