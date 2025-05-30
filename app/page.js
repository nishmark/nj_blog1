'use client'
import { useEffect, useState } from 'react'
import BlogPostM1 from '../components/BlogPostM1'
import blogs from '../blogdata/blogs.json'
import Link from 'next/link'

export default function Home() {
  const [displayBlogs, setDisplayBlogs] = useState(blogs);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBlogs = localStorage.getItem('blogs');
      if (storedBlogs) {
        try {
          setDisplayBlogs(JSON.parse(storedBlogs));
        } catch (e) {
          // If parsing fails, fallback to default blogs
          setDisplayBlogs(blogs);
        }
      }
    }
  }, []);

  function clearData(){
    localStorage.removeItem('blogs');
    setDisplayBlogs(blogs);

  }

  return (
    <div>
      {displayBlogs.map((blog, idx) => (
        <BlogPostM1
          key={idx}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          author={blog.author}
          date={blog.date}
        />
      ))}
      <div className='writeBlogDiv'>
      <Link href="/Writeblog">
      <button className='writeBlogButton'> WRITE NEW BLOG </button>
    
       </Link>
       <button className='writeBlogButton' onClick={clearData}> CLEAR STORED DATA </button>
       
      </div>
      
      
    </div>
  );
}
