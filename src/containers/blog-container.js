import React, { Component } from 'react'
import Blog from '../components/blog-component.js'
import '../blog.css'

//Blogs
import { whatIveLearned } from '../blogs/what-ive-learned.js'

class BlogContainer extends Component {
  state = {
    currentBlogTitle: "This is a Blog"
  }

  renderedBlog = () => {
    if (this.state.currentBlogTitle !== ""){
      return( <Blog title={this.state.currentBlogTitle} exit={this.exitBlogContainer} content={whatIveLearned}/>)
    }else{
      return ("")
    }
  }

  exitBlogContainer = () => {
    this.setState({
      currentBlogTitle: ""
    })
  }

  callContainer = (event) => {
    debugger;
    this.setState({
      currentBlogTitle: event.target.textContent
    })
  }

   render(){
     return(
       <div className="blog-container">
         <h2>Dev. Blog</h2>
         <div className="blog-index">
           <h3>Piatto Portfolio Project</h3>
           <ul>
             <li>
               <p onClick={this.callContainer}>What I've Learned From Piatto</p>
             </li>
             <li>
               <p onClick={this.callContainer}>Application Authentication Part 1- Server Side</p>
             </li>
             <li>
               <p onClick={this.callContainer}>Application Authentication Part 2- Client Side</p>
             </li>
             <li>
               <p onClick={this.callContainer}>Nested Attributes in Forms</p>
             </li>
             <li>
               <p onClick={this.callContainer}>Implementing a Login/Signup Sliding Box</p>
             </li>
             <li>
               <p onClick={this.callContainer}>Setting up Fullstack App Part 1- Rails API</p>
             </li>
             <li>
               <p onClick={this.callContainer}>Setting up Fullstack App Part 2- React Client</p>
             </li>
           </ul>
         </div>
         {this.renderedBlog()}
       </div>
     )
   }
}

export default BlogContainer
