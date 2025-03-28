
/**
 * StatsItem Component
 * 
 * This component renders a single statistics item with an icon, a counter, 
 * a title, and a subtitle. It is designed to be used as part of a grid layout.
 * 
 * Props:
 * @param {Object} props - The props object.
 * @param {string} props.icon - The CSS class for the icon to be displayed.
 * @param {number} props.endValue - The end value for the counter animation.
 * @param {string} props.title - The title text to be displayed.
 * @param {string} props.subtitle - The subtitle text to be displayed.
 * 
 * @returns {JSX.Element} A JSX element representing a statistics item.
 */
import React from 'react'

const StatsItem = ({ icon, endValue, title, subtitle }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item">
        <i className={icon}></i>
        <span
          data-purecounter-start="0"
          data-purecounter-end={endValue}
          data-purecounter-duration="1"
          className="purecounter"
        ></span>
        <p>
          <strong>{title}</strong> <span>{subtitle}</span>
        </p>
      </div>
    </div>
  )
}

export default StatsItem
