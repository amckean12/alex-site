import React, { Component } from 'react'

//Components
import ProjectComponent from '../components/portfolio-project'

//Styling
import '../portfolio.css'

class PortfolioContainer extends Component {
   render(){
     return(
       <div className="Portfolio-Container">
        <ProjectComponent
          title="Piatto"
          about="A dynamic cookbook that allows users to build menus, based on searching for recipes by tags."
          techUsed="Javascript | Ruby | React | Redux | Rails | Knock | HTML | CSS | PostgreSQL | Heroku"
          keyfeatures={["JWT authentication for API access", "Recipe tag lookup/creation algorithm", "User Persistance with Redux-Persist", "Asynchronous web requests with Redux-Thunk"]}
          link = "https://github.com/amckean12/piatto-react"
          />
        <ProjectComponent
          title="My Portfolio Site"
          about="This current site. I use this for my blog as well as displaying projects I've worked on."
          techUsed="Javascript | React | Redux | HTML | CSS | Github Pages"
          keyfeatures={["Minimal and Responsive Design", "React Router used for Navigation", "Responsive navigation links"]}
          link = "https://github.com/amckean12/alex-site.github.io"
          />
       </div>
     )
   }
}

export default PortfolioContainer
