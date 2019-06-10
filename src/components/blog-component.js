import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => (
  <div className="blog-component">
    <h3>{props.title}</h3>
    <FontAwesomeIcon icon={faTimes} />
  </div>
);

export default Blog
