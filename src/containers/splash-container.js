import React, { Component } from 'react';

//Components
import WelcomeContent from '../components/welcome-content'
import PorfolioContent from '../components/portfolio-content'
import SkillsContent from '../components/skills-content'

//Styling
import '../css/splash.css'
import '../css/splash-container.css'

class SplashContainer extends Component {
   render(){
     return(
       <div className="splash-container">
         <WelcomeContent />
         <SkillsContent />
         <PorfolioContent />
       </div>
     )
   }
}

export default SplashContainer
