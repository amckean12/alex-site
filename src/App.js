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

//Styling Inputs
import './App.css'
const linkStyles = {
  textDecoration: 'none',
  'font-family': 'Source Sans Pro',
  color: 'white'
}

class App extends Component {
  state = {
    renderComponent: "home"
  }

  componentDidUpdate(){
    if (this.state.renderComponent === "home"){
      return (<SplashContainer  renderComponent={this.state.renderComponent}/>)
    }
    if (this.state.renderComponent === "blog"){
      return (<BlogContainer renderComponent={this.state.renderComponent}/>)
    }
  }

  handleClick(event){
    this.setState({
        renderComponent: event.target.value
      })
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
          {this.componentDidUpdate()}
        </Router>
      </div>
    );
  }
}

export default App;
