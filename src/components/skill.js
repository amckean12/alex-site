import React from 'react'

import '../css/skills.css'


const SkillsContent = (props) => (
  <div className="skill">
    <div className="skill-icon">
      {props.faIcon}
    </div>
    <div className="skill-info">
      <h3>{props.skill}</h3>
      <p>{props.describe}</p>
    </div>
  </div>
);

export default SkillsContent
