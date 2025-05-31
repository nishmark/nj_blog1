"use client";
import React from "react";
import Link from "next/link";

function header() {
  return (
    <div className="HeaderMainBox">
      <h1 className="MyBlogText">Koushik's Blog</h1>

      <div className="menuButtonBox">
        <Link href="/">
          {" "}
          <button> HOME</button>{" "}
        </Link>

        <Link href="/Writeblog">
          <button>WRITE NEW BLOG</button>
        </Link>
      </div>
    </div>
  );
}

export default header;
