
/**
 * SkillsColumn component renders a column of skill items.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Array} props.skills - An array of skill objects to be displayed.
 * @param {string} props.skills[].name - The name of the skill.
 * @param {number} props.skills[].value - The value or level of the skill.
 * @returns {JSX.Element} A column containing a list of SkillItem components.
 */
import React from 'react'
import SkillItem from './SkillItem'

const SkillsColumn = ({ skills }) => {
  return (
    <div className="col-lg-6">
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          name={skill.name}
          value={skill.value}
          ariaValue={skill.value}
        />
      ))}
    </div>
  )
}

export default SkillsColumn
