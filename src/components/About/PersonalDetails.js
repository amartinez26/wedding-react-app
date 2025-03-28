

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
      <p class="py-3">
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
        Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt
        officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis
        quidem quia. Sed et consectetur qui quia repellendus itaque neque.
      </p>
    </div>
  )
}

export default PersonalDetails
