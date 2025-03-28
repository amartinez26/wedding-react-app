
/**
 * ResumeItem component renders a resume item with a title, optional subtitle, date, description, and a list of items.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the resume item.
 * @param {string} [props.subtitle] - The optional subtitle of the resume item.
 * @param {string} [props.date] - The optional date associated with the resume item.
 * @param {string} [props.description] - The optional description of the resume item.
 * @param {string[]} [props.list] - An optional array of list items to display under the resume item.
 * @returns {JSX.Element} A JSX element representing a resume item.
 */
import React from 'react'

const ResumeItem = ({ title, subtitle, date, description, list }) => {
  return (
    <div className="resume-item">
      <h4>{title}</h4>
      {date && <h5>{date}</h5>}
      {subtitle && (
        <p>
          <em>{subtitle}</em>
        </p>
      )}
      {description && <p>{description}</p>}
      {list && (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ResumeItem
