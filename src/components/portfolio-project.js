import React from 'react'
import '../portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectComponent = (props) => (
  <div className="project-component">
    <div className={`project-image`}>
      Hi
    </div>
    <div className={`project-info`}>
      <h2>{props.title}</h2>
      <p>Tech Used:<span>{props.techUsed}</span></p>
      <p>About: <span>{props.about}</span></p>
      <div className="key-features">
        <p>Key Dev. Features</p>
        <ul>
          { props.keyfeatures.map((feature) =>
            <li className="feature-item">{feature}</li>) }
        </ul>
      </div>
      <div className="project-link-container">
        <a href={props.link}><FontAwesomeIcon icon={faGithub}/></a>
      </div>
    </div>
  </div>
);

export default ProjectComponent
