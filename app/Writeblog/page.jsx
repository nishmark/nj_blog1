"use client";

import wcss from "./writeBlogCss.module.css";
import React, { useState, useEffect } from "react";

function page() {
  const [blogs, setBlogs] = useState(() => {
    if (typeof window !== "undefined") {
      const storedBlogs = localStorage.getItem("blogs");
      return storedBlogs ? JSON.parse(storedBlogs) : [];
    }
    return [];
  });

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
    image: "/images/dog1.jpeg",
    date: new Date().toISOString().slice(0, 10),
  });

  // Load blogs from localStorage on mount
  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  // Save blogs to localStorage whenever blogs change
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBlogs([form, ...blogs]);
    setForm({
      title: "",
      description: "",
      content: "",
      author: "",
      image: "/images/dog1.jpeg",
      date: new Date().toISOString().slice(0, 10),
    });
  }

  return (
    <div className={wcss.wbouterDiv}>
      <div className={wcss.imageOuterDiv}>
        <img className={wcss.imgclasssrc} src="/images/dog1.jpeg" alt="Dog" />
      </div>
      <form className="formClass" onSubmit={handleSubmit}>
        <p>WRITING A BLOG</p>
        <input
          className={wcss.input}
          name="title"
          type="text"
          placeholder="Blog Heading"
          value={form.title}
          onChange={handleChange}
        />
        <p>SMALL DESCRIPTION</p>
        <input
          className={wcss.input}
          name="description"
          type="text"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
        />
        <p>WRITE AWESOME CONTENT</p>
        <textarea
          className={wcss.textarea}
          name="content"
          rows={10}
          placeholder="Write your blog content here..."
          value={form.content}
          onChange={handleChange}
        ></textarea>
        <p>YOUR NAME</p>
        <input
          className={wcss.input}
          name="author"
          type="text"
          placeholder="Your Name"
          value={form.author}
          onChange={handleChange}
        />
        <button className={wcss.button} type="submit">
          {" "}
          SUBMIT{" "}
        </button>
      </form>
      <h1> Saved Bolgs</h1>

      <div>
        {blogs.map((blog, index) => (
          <div key={index} className="storedBogDiv">
            <h2>{blog.title}</h2>
            <p>
              <i>
                {blog.author} on {blog.date}
              </i>
            </p>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
