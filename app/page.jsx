"use client";
import { useEffect, useState } from "react";
import blogs from "../blogdata/blogs.json";
import Header from "./Header";
import BlogsList from "@/components/BlogsList";

export default function Home() {
  const [displayBlogs, setDisplayBlogs] = useState(blogs);

  return (
    <div>
      <Header />
      <BlogsList blogs={displayBlogs} />
    </div>
  );
}
