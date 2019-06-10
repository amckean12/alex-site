import React, { Component } from 'react'
import Blog from '../components/blog-component.js'
import '../blog.css'

//Blogs
import { whatIveLearned } from '../blogs/what-ive-learned.js'

class BlogContainer extends Component {
   render(){
     return(
       <div className="blog-container">
         <h2>Dev. Blog</h2>
         <div className="blog-index">
           <h3>Piatto Portfolio Project</h3>
           <ul>
             <li>What I've Learned From Piatto</li>
             <li>Application Authentication Part 1- Server Side</li>
             <li>Application Authentication Part 2- Client Side</li>
             <li>Nested Attributes in Forms</li>
             <li>Setting up Fullstack App Part 1- Rails API</li>
             <li>Setting up Fullstack App Part 2- React Client</li>
           </ul>
         </div>
       </div>
     )
   }
}

export default BlogContainer
