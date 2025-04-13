

/**
 * @file PersonalDetails.js
 * @description This file defines a React functional component that renders a list of personal details
 *              in a two-column layout. The component accepts an array of details as a prop, where each
 *              detail includes a label and a value, and displays them in a structured format.
 */
import React from 'react'

const PersonalDetails = ({ details }) => {
  return (
    <div className="row">
      {details.map((column, index) => (
        <div key={index} className="col-lg-6">
          <ul>
            {column.map((detail, idx) => (
              <li key={idx}>
                <i className="bi bi-chevron-right"></i>{' '}
                <strong>{detail.label}:</strong> <span>{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="py-3">
        "And there you have it—some totally random, yet completely essential facts
        about us. We hope this insider knowledge helps you feel even more
        excited to celebrate with us in paradise. But let’s be real—if you miss
        this wedding, you're cut off. Okay maybe not but you’ll regret it forever. FOMO doesn’t even begin to cover
        it. So mark your calendars, move that savings to your checkings, and get ready for the biggest event
        of 2026!"
      </p>
    </div>
  )
}

export default PersonalDetails
