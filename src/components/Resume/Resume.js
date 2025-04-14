
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
    title: 'Q & A',
    description:
      'Here are some general questions and answers that may help you.',
  }

  const leftColumn = [
    {
      title: 'When should I book my room?',
      description:
        'The obvious answer is as soon as possible. Just keep in mind these important payment dates',
      list: [
        'October 2nd, 2025 - 1st and 2nd Deposits are due',
        'December 2nd, 2025 - Final Payment is due',
      ],
    },
    {
      title: 'Whats the Best way to book my Trip?',
      description:
        "We've partnered with Paradise Weddings to help you book your trip. There travel agent is gauranteed to get yout he best price when your booking. They will also match any lower price you find from any reputable site.",
    },
    {
      title: 'Are Flights included with Reservation?',
      description:
        'Flights are not included with your hotel reservation. But the travel agent will help you book your flight along with your reservation.',
    },
    {
      title: 'Should I bring a gift?',
      description:
        "Since your traveling for the wedding, were not expecting any gifts. Your Presense is enough!",
    },
    {
      title: 'How far is the resort from the Cancun Airport?',
      description:
        "The resort is about 35 minutes from the Cancun Airport. The travel agent will help you book your transportation to and from the airport.",
    },
  ]

  const rightColumn = [
    {
      title: 'What should I wear to the wedding?',
      description:
        'The Ceremony is on the beach, so please wear something formal thats light and breezy. Ladies, you may want to bring flats or sandals. We want you to be comfortable!',
    },
    {
      title: 'Am I allowed to bring a plus one?',
      description:
        'Your wedding invitation will indicate the number of guests allowed to attend. If you are unsure, please reach out to us.',
    },
    {
      title: 'What if i find a Cheaper Price online?',
      description:
        'As stated before but I really want to reiterate that the travel agent will match any price you find online from a reputable site. So please reach out to them before booking your trip.',
    },
    {
      title: 'How do you get around once I am at the resort?',
      description:
        'More information to follow here. But the resort is all inclusive and has everything you need.',
    },
    {
      title: 'Airport Tips?',
      description:
        "Tips to follow here. But the airport is very easy to navigate. Just make sure you have your passport and any other travel documents ready.",
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
          <ResumeColumn items={leftColumn} />
          <ResumeColumn items={rightColumn} />
        </div>
      </div>
    </section>
  )
}

export default Resume
