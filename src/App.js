import React, { Component } from 'react';
//Components
import BlogContainer from './containers/blog-container'
import SplashContainer from './containers/splash-container'
import PortfolioContainer from './containers/portfolio-container'

//React Scroll
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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

  render() {
    return (
      <div className="App">
        <div className="Navigation-Wrapper">
          <nav>
            <ul>
              <li>
                <Link to='Portfolio-Container' spy={true} smooth={true} offset={-70} duration={550} style={linkStyles}>Portfolio</Link>
              </li>
              <li>
                <Link to='blog-container' spy={true} smooth={true} offset={-70} duration={550} style={linkStyles}>Blog</Link>
              </li>
              <li>
                <Link to='splash-container' spy={true} smooth={true} offset={-70} duration={550} style={linkStyles}>Home</Link>
              </li>
            </ul>
          </nav>
        </div>
          <SplashContainer />
          <PortfolioContainer />
          <BlogContainer />
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
