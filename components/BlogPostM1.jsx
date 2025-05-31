import React from "react";

function BlogPostM1({ title, description, image, author, date }) {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p> BY - {author} </p>
          <p> DATE - {date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPostM1;
