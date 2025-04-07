// Description: This component renders the "About" section of a webpage, including a title, profile image, and content about the individual.
// It uses the `SectionTitle`, `ProfileImage`, and `AboutContent` components to structure the content.
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import ProfileImage from './ProfileImage'
import AboutContent from './AboutContent'
import myProfileImg from '../../assets/img/profile-img.jpg'

const About = () => {
  const sectionTitle = {
    title: 'About',
    description:
      'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
  }

  const profileImage = {
    src: myProfileImg,
    alt: 'Profile Image',
  }

  const aboutContent = {
    title: 'UI/UX Designer & Web Developer.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    details: [
      [
        { label: 'Birthday', value: '1 May 1995' },
        { label: 'Website', value: 'www.example.com' },
        { label: 'Phone', value: '+123 456 7890' },
        { label: 'City', value: 'New York, USA' },
      ],
      [
        { label: 'Age', value: '30' },
        { label: 'Degree', value: 'Master' },
        { label: 'Email', value: 'email@example.com' },
        { label: 'Freelance', value: 'Available' },
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
