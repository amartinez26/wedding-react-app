
/**
 * Resume component that displays a resume section with a title, description,
 * and two columns: one for summary & education and another for professional experience.
 *
 * @component
 * @returns {JSX.Element} The rendered Resume component.
 *
 * @description
 * This component renders a resume section with the following structure:
 * - A section title with a description.
 * - A left column containing summary and education details.
 * - A right column containing professional experience details.
 *
 * The data for the section title, left column, and right column is hardcoded
 * within the component as objects and arrays.
 */
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import ResumeColumn from './ResumeColumn'

const Resume = () => {
  const sectionTitle = {
    title: 'Resume',
    description:
      'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
  }

  const leftColumn = [
    {
      title: 'Brandon Johnson',
      subtitle:
        'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
      list: [
        'Portland par 127, Orlando, FL',
        '(123) 456-7891',
        'alice.barkley@example.com',
      ],
    },
    {
      title: 'Master of Fine Arts & Graphic Design',
      date: '2015 - 2016',
      subtitle: 'Rochester Institute of Technology, Rochester, NY',
      description:
        'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.',
    },
    {
      title: 'Bachelor of Fine Arts & Graphic Design',
      date: '2010 - 2014',
      subtitle: 'Rochester Institute of Technology, Rochester, NY',
      description:
        'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis. Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem.',
    },
  ]

  const rightColumn = [
    {
      title: 'Senior graphic design specialist',
      date: '2019 - Present',
      subtitle: 'Experion, New York, NY',
      list: [
        'Lead in the design, development, and implementation of the graphic, layout, and production communication materials.',
        'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
        'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design.',
        'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.',
      ],
    },
    {
      title: 'Graphic design specialist',
      date: '2017 - 2018',
      subtitle: 'Stepping Stone Advertising, New York, NY',
      list: [
        'Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).',
        'Managed up to 5 projects or tasks at a given time while under pressure.',
        'Recommended and consulted with clients on the most appropriate graphic design.',
        'Created 4+ design presentations and proposals a month for clients and account managers.',
      ],
    },
  ]

  return (
    <section id="resume" className="resume section">
      <SectionTitle
        title={sectionTitle.title}
        description={sectionTitle.description}
      />
      <div className="container">
        <div className="row">
          <ResumeColumn title="Summary & Education" items={leftColumn} />
          <ResumeColumn title="Professional Experience" items={rightColumn} />
        </div>
      </div>
    </section>
  )
}

export default Resume
