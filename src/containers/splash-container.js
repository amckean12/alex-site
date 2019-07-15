import React, { Component } from 'react';

//Components
import WelcomeContent from '../components/welcome-content'

//Styling
import '../css/splash.css'
import '../css/splash-container.css'

class SplashContainer extends Component {
   render(){
     return(
       <div className="splash-container">
         <WelcomeContent />
       </div>
     )
   }
}

export default SplashContainer
