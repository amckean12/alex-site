import React, { Component } from 'react'
import Blog from '../components/blog-component.js'
import '../blog.css'

//Blogs
import { whatIveLearned } from '../blogs/what-ive-learned.js'

class BlogContainer extends Component {
  state = {
    currentBlogTitle: "What I've Learned From Piatto"
  }

  renderedBlog = () => {
    return( <Blog title={this.state.currentBlogTitle}/>)
  }

   render(){
     return(
       <div className="blog-container">
         <h2>Dev. Blog</h2>
         <div className="blog-index">
           <h3>Piatto Portfolio Project</h3>
           <ul>
             <li>
               <p>What I've Learned From Piatto</p>
             </li>
             <li>
               <p>Application Authentication Part 1- Server Side</p>
             </li>
             <li>
               <p>Application Authentication Part 2- Client Side</p>
             </li>
             <li>
               <p>Nested Attributes in Forms</p>
             </li>
             <li>
               <p>Setting up Fullstack App Part 1- Rails API</p>
             </li>
             <li>
               <p>Setting up Fullstack App Part 2- React Client</p>
             </li>
           </ul>
         </div>
         { this.renderedBlog() }
       </div>
     )
   }
}

export default BlogContainer
