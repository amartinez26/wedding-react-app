/**
 * SkillItem component displays a skill with its name, value, and a progress bar.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the skill.
 * @param {number} props.value - The percentage value of the skill (0-100).
 * @param {number} props.ariaValue - The current value of the progress bar for accessibility.
 * @returns {JSX.Element} The rendered SkillItem component.
 */
import React from 'react';
import '../../assets/css/main.css'; // Import the CSS file containing the styles

const SkillItem = ({ name, value }) => {
  return (
    <div className="skill">
      <span className="skill-name">{name}<i className="val">{value}%</i></span>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: '0%' }} // Start with 0% width for animation
          data-value={value} // Custom attribute for animation
        ></div>
      </div>
    </div>
  )
}

export default SkillItem;
