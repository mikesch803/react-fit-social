import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, closeEditModal } from "../../reducers/postSlice";
import {
  Aside,
  EditPost,
  Filter,
  Loader,
  Nav,
  PostCard,
  Textbox,
} from "../../components";
import "./Home.css";
export function Home() {
  const { posts, loading, editModal, currPost } = useSelector(
    (state) => state.posts
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  const [filter, setFilter] = React.useState("Latest");

  const filterHandler = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <Textbox />
        <Filter filter={filter} filterHandler={filterHandler} />
        {loading ? (
          <Loader />
        ) : filter === "Latest" && posts.length !== 0 ? (
          posts
            .filter((ele) => ele.username === user.username)
            .map((item) => (
              <li key={item._id}>
                <PostCard item={item} />
              </li>
            ))
        ) : (
          posts
            .filter((ele) => ele.likes.likeCount >= 1000)
            .map((item) => (
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
