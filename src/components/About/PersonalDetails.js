

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
    </div>
  )
}

export default PersonalDetails
