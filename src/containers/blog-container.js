import React, { Component } from 'react'
import Blog from '../components/blog-component.js'

//Blogs
import { whatIveLearned } from '../blogs/what-ive-learned.js'

class BlogContainer extends Component {
   render(){
     return(
       <div className="blog-container">
         <h2>Dev. Blog</h2>
         <Blog content={whatIveLearned}/>
       </div>
     )
   }
}

export default BlogContainer
