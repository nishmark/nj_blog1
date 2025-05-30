import React from 'react'
import compcss from './compcss.module.css'

function BlogPostM1({ title, description, image, author, date }) {
  return (
    <div className={compcss.blogPostOuterDiv}>
      <div className={compcss.blogPostContent}>
        <img
          src={image}
          alt={title}
          className={compcss.blogPostImage}
        />
        <div className={compcss.blogPostText}>
          <h2 className={compcss.blogPostHeading}>{title}</h2>
          <p className={compcss.blogPostDescription}>{description}</p>
          <p className={compcss.autorCss}> BY - {author} </p>
          <p className={compcss.dateCss}> DATE - {date}</p>

          
        </div>
      </div>
    </div>
  );
}

export default BlogPostM1