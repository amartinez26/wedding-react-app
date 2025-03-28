// Description: This component is used to display the content of the About page. It takes in a title, description, and details as props and renders them in a structured format.
//                       title="More Details"
import React from 'react'
import PersonalDetails from './PersonalDetails'

const AboutContent = ({ title, description, details }) => {
  return (
    <div className="col-lg-8 content">
      <h2>{title}</h2>
      <p className="fst-italic py-3">{description}</p>
      <PersonalDetails details={details} />
    </div>
  )
}

export default AboutContent
