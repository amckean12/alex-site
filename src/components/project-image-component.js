import React from 'react'

const ProjectImageComponent = (props) => (
  <div className="project-image-slideshow">
    <button onClick={props.handleClick}>See Demo</button>
    <br></br>
    <button onClick={props.handleClick}>Images</button>
  </div>
);

export default ProjectImageComponent
