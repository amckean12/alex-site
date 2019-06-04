import React, { Component } from 'react'

//Components
import ProjectComponent from '../components/portfolio-project'

//Styling
import '../portfolio.css'

class PortfolioContainer extends Component {
   render(){
     return(
       <div className="Portfolio-Container">
        <ProjectComponent />
        <ProjectComponent />
       </div>
     )
   }
}

export default PortfolioContainer
