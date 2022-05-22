import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Aside, Loader, Nav, PostCard, Textbox } from "../../components";
import { EditPost } from "../../components/edit-textbox/EditPost";
import "./Home.css";
import { getAllPosts, closeEditModal } from "../../reducers/postSlice";
export function Home() {
  const { posts, loading, editModal, currPost } = useSelector((state) => state.posts);

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
          posts.length!==0 &&
          posts.map((item) => (
            <li key={item._id}>
              <PostCard item={item}
              />
            </li>
          ))
        )}
       
       {editModal && <div className="modal-edit"
       ><EditPost currPost={currPost} closeEditModal={closeEditModal}/></div>}

      </main>
      <Aside />
    </div>
  );
}
