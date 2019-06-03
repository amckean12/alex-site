import React, { Component } from 'react';
//Components
import BlogContainer from './containers/blog-container'
import SplashContainer from './containers/splash-container'
import PortfolioContainer from './containers/portfolio-container'

//React Router
import { BrowserRouter as Router, Link } from "react-router-dom";

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
    if (this.props.currentRoute === "/blog"){
      return (<BlogContainer/>)
    }
    if (this.props.currentRoute === "/portfolio"){
      return (<PortfolioContainer/>)
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/portfolio' style={linkStyles} onClick={this.props.addPortRoute}>Portfolio</Link>
              </li>
              <li>
                <Link to='/blog' style={linkStyles} onClick={this.props.addBlogRoute}>Blog</Link>
              </li>
              <li>
                <Link to='/' style={linkStyles} onClick={this.props.addHomeRoute}>Home</Link>
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

const mapDispatchToProps = dispatch => ({
  addHomeRoute: route => dispatch({type: "ADD_HOME_ROUTE", route}),
  addBlogRoute: route => dispatch({type: "ADD_BLOG_ROUTE", route}),
  addPortRoute: route => dispatch({type: "ADD_PORT_ROUTE", route})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
