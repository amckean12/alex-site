import React from 'react';
import './App.css'

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

//React Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Styling Inputs
import './App.css'

//Components
import BlogContainer from './containers/blog-container'

const linkStyles = {
  textDecoration: 'none',
  'font-family': 'Source Sans Pro',
  color: 'white'
}

function App() {
  return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to='/portfolio' style={linkStyles}>Portfolio</Link>
              </li>
              <li>
                <Link to='/blog' style={linkStyles}>Blog</Link>
              </li>
              <li>
                <Link to='/' style={linkStyles}>Home</Link>
              </li>
            </ul>
          </nav>
          <Route path="/blog/" component={BlogContainer} />
          <h1>Hello, I'm Alex!</h1>
          <h2>Full Stack Developer | Blogger | Always Learning</h2>
          <a href="https://github.com/amckean12"></a>
          <a href="https://www.linkedin.com/in/alex-mckean/"></a>
        </div>
      </Router>
  );
}

export default App;
