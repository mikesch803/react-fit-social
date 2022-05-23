import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, closeEditModal } from "../../reducers/postSlice";
import { Aside, EditPost, Loader, Nav, PostCard } from "../../components";
import "./Explore.css";
export function Explore() {
  const { posts, loading, editModal, currPost } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <h2 className="m-tb-1">Explore</h2>
        {loading ? (
          <Loader />
        ) : (
          posts.length !== 0 &&
          posts.map((item) => (
            <li key={item._id}>
              <PostCard item={item} />
            </li>
          ))
        )}

        {editModal && (
          <div className="modal-edit">
            <EditPost currPost={currPost} closeEditModal={closeEditModal} />
          </div>
        )}
      </main>
      <Aside />
    </div>
  );
}
