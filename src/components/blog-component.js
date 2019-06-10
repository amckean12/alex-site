import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../blog.css'

const Blog = (props) => (
  <div className="blog-component">
    <button onClick={props.exit}><FontAwesomeIcon icon={faTimes} /></button>
    <h3>{props.title}</h3>
  </div>
);

export default Blog
