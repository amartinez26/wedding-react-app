
/**
 * Skills component renders a section displaying a list of skills divided into two columns.
 * It includes a section title and two skill columns with progress values.
 *
 * @component
 * @returns {JSX.Element} A section element containing the skills information.
 *
 * @description
 * The Skills component displays a "Skills" section with a title and description.
 * It organizes the skills into two columns: leftColumnSkills and rightColumnSkills,
 * each containing skill names and their respective proficiency values.
 *
 * @example
 * <Skills />
 */
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import SkillsColumn from './SkillsColumn'

const Skills = () => {
  const sectionTitle = {
    title: 'Skills',
    description:
      'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
  }

  const leftColumnSkills = [
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 90 },
    { name: 'JavaScript', value: 75 },
  ]

  const rightColumnSkills = [
    { name: 'PHP', value: 80 },
    { name: 'WordPress/CMS', value: 90 },
    { name: 'Photoshop', value: 55 },
  ]

  return (
    <section id="skills" className="skills section light-background">
      <SectionTitle
        title={sectionTitle.title}
        description={sectionTitle.description}
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <SkillsColumn skills={leftColumnSkills} />
          <SkillsColumn skills={rightColumnSkills} />
        </div>
      </div>
    </section>
  )
}

export default Skills
