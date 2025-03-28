
/**
 * ResumeColumn component renders a column containing a title and a list of resume items.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the resume column.
 * @param {Array} props.items - An array of resume items to display.
 * @param {Object} props.items[].title - The title of the individual resume item.
 * @param {Object} props.items[].subtitle - The subtitle of the individual resume item.
 * @param {Object} props.items[].date - The date associated with the individual resume item.
 * @param {Object} props.items[].description - A description of the individual resume item.
 * @param {Object} props.items[].list - An optional list of additional details for the resume item.
 *
 * @returns {JSX.Element} A JSX element representing the resume column.
 */
import React from 'react'
import ResumeItem from './ResumeItem'

const ResumeColumn = ({ title, items }) => {
  return (
    <div className="col-lg-6" data-aos="fade-up">
      <h3 className="resume-title">{title}</h3>
      {items.map((item, index) => (
        <ResumeItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          description={item.description}
          list={item.list}
        />
      ))}
    </div>
  )
}

export default ResumeColumn
