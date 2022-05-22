import React from "react";
import { useSelector } from "react-redux";
import { Aside, Loader, Nav, PostCard } from "../../components";
import "./Bookmark.css";
export function Bookmark() {
  const { bookmarks, loading } = useSelector((state) => state.bookmark);
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <h2>Bookmark</h2>
        {loading ? (
          <Loader />
        ) : bookmarks.length !== 0 ? (
          bookmarks.map((item) => (
            <li key={item._id}>
              <PostCard item={item} />
            </li>
          ))
        ) : (
          <div className="flex-center">
            <img
              className="txt-center"
              src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-800x400.v1.png"
              alt="empty-bookmark"
              width="500px"
            />
            <h3 className="txt-center">Save some bookmark for later</h3>
          </div>
        )}
      </main>
      <Aside />
    </div>
  );
}
