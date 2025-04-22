
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
        "We've partnered with Paradise Weddings to help you book your trip. There travel agent is gauranteed to get you the best price when your booking. They will also match any lower price you find from any reputable site.",
    },
    {
      title: 'Are Flights included with Reservation?',
      description:
        'Flights are not included with your hotel reservation. Some recommended pages to check would be Skyscanner, Kayak, Price Travel, Priceline, Flapper, Despegar and Hopper.',
    },
    {
      title: 'Should I bring a gift?',
      description:
        "Since your traveling for the wedding, were not expecting any gifts. Your Presense is enough! But should you feel inclined in your heart, we are accepting checks for the honeymoon fund!",
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
        'As stated before but I really want to reiterate that the travel agent will match any price you find online from a reputable site, and especially with the resort booking site itself. Paradise Weddings will be glad to verify this directly with the resort according to the policies and do our best to match the rates. If this is the case and the price match is accepted, all the rates will be updated, and in case the trip is paid in full, Paradise Weddings will contact you to let them know about the refund process. ',
    },
    {
      title: 'How do you get around once I am at the resort?',
      description:
        'If you need transportation to visit other areas, we always recommend that you contact us to get rates from our trusted provider; however, you can also get a taxi at the resort front desk at any time. Uber is not allowed in this area. ',
    },
    {
      title: 'Airport Tips?',
      description:
        'Close to the travel date, we will share with your loved ones all the information in case of an emergency and contact numbers, travel documents, and a confirmation letter of their transportation service if they added the service with us. The transportation service is not mandatory. Make sure you have your passport and any other travel documents ready.',
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
