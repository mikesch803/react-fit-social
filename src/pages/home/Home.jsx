import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Aside, Loader, Nav, PostCard, Textbox } from "../../components";
import "./Home.css";
import { getAllPosts } from "./postSlice";
export function Home() {
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <Textbox />
        <h2 className="m-tb-1">Latest post</h2>
        {loading ? (
          <Loader />
        ) : (
          posts.length &&
          posts.map((item) => (
            <li key={item._id}>
              <PostCard item={item} />
            </li>
          ))
        )}
      </main>
      <Aside />
    </div>
  );
}
