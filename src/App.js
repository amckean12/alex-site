import React, { Component } from 'react';
//Components
import BlogContainer from './containers/blog-container'
import SplashContainer from './containers/splash-container'

import './App.css'

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

//React Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Redux Imports

import { connect } from 'react-redux'

//Styling Inputs
import './App.css'
const linkStyles = {
  textDecoration: 'none',
  'font-family': 'Source Sans Pro',
  color: 'white'
}

class App extends Component {

  componentDidUpdate(){
    if (this.props.currentRoute === "/"){
      return (<SplashContainer/>)
    }
    if (this.props.currentRoute === "blog"){
      return (<BlogContainer/>)
    }
  }

  handleClick(event){
    console.log("hello")
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/portfolio' style={linkStyles}>Portfolio</Link>
              </li>
              <li>
                <Link to='/blog' style={linkStyles} onClick={(event) => this.handleClick(event)} value="blog">Blog</Link>
              </li>
              <li>
                <Link to='/' style={linkStyles} onClick={(event) => this.handleClick(event)} value="home">Home</Link>
              </li>
            </ul>
          </nav>
          { this.componentDidUpdate() }
        </Router>
      </div>
    );
  }
}

const mapStateToProps = route => {
 return({
   currentRoute: route.routeReducer.route
 })
}

export default connect(mapStateToProps, null)(App);
