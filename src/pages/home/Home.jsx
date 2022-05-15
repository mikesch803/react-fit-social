import React from "react";
import { Aside, Nav, PostCard, Textbox } from "../../components";
import { usePostContext } from "../../context";
import "./Home.css";
export function Home() {
  const { post } = usePostContext();
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <Textbox />
        <h2 className="m-tb-1">Latest post</h2>
        {post.map((item) => (
          <li key={item._id}>
            <PostCard item={item} />
          </li>
        ))}
      </main>
      <Aside />
    </div>
  );
}
