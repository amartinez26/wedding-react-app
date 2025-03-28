
/**
 * SkillItem component displays a skill with its name, value, and a progress bar.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the skill.
 * @param {number} props.value - The percentage value of the skill (0-100).
 * @param {number} props.ariaValue - The current value of the progress bar for accessibility.
 * @returns {JSX.Element} The rendered SkillItem component.
 */
import React from 'react'

const SkillItem = ({ name, value, ariaValue }) => {
  return (
    <div className="progress">
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={ariaValue}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

export default SkillItem
