import React from "react";
import { Aside, Nav, PostCard } from "../../components";
import "./Bookmark.css";
export function Bookmark() {
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <h2>Bookmark</h2>
        {/* {post.map((item) => (
          <li key={item._id}>
            <PostCard item={item} />
          </li>
        ))} */}
      </main>
      <Aside/>
    </div>
  );
}
