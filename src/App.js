import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Component Inputs
import PortfolioContainer from './containers/portfolio-container'
import BlogContainer from './containers/blog-container'
import AboutContainer from './containers/about-container'
import ContactContainer from './containers/contact-container'

//Styling Inputs
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <h1>AJ</h1>
          <ul>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li>><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Route path='/' exact component={AboutContainer} />
        <Route path='/portfolio' component={PortfolioContainer} />
        <Route path='/blog' component={BlogContainer} />
        <Route path='/contact' component={ContactContainer} />
      </div>
  </Router>
  );
}

export default App;
