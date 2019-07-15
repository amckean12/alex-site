//Frameworks and tools
import React from 'react'

//Styling
import '../css/welcome-page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const WelcomeContent = (props) => (
  <div className="welcome-component">
    <h1>Hello, I'm Alex!</h1>
    <h2>Full Stack Developer | Builder | Always Learning</h2>
    <div className="social-icon-container">
      <a href="https://github.com/amckean12" className="social-icon-link-github"><FontAwesomeIcon icon={faGithub}/></a>
      <a href="https://www.linkedin.com/in/alex-mckean/" className="social-icon-link-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
    </div>
  </div>
);

export default WelcomeContent
