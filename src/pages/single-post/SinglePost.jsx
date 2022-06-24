import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Aside, EditPost, Nav, PostCard } from "../../components";
import {
  closeEditModal,
  getAllPosts,
  addComment,
  deleteComment,
  editComment,
} from "../../reducers/postSlice";
import { Navigate, useParams } from "react-router-dom";
import { EditIcon, RemoveIcon } from "../../assets/icons/icons";
import { Avatar, Button } from "@mui/material";
import "./SinglePost.css";
import { useTitle } from "../../hooks";
import { editAndRemoveOptions } from "../../utils";
export function SinglePost() {
  const { editModal, currPost, posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const { user: loggedInUser } = useSelector((state) => state.auth);
  const { PostId } = useParams();
  const dispatch = useDispatch();

  const singlePost = posts?.find((item) => item._id === PostId);

  const [comment, setComment] = useState({
    item: PostId,
    reply: "",
    editReplyState: false,
  });

  useTitle("Post");

  if (singlePost === undefined) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="page">
      <Nav />
      <main className="main">
        <h2 className="m-tb-1">Post</h2>
        <PostCard item={singlePost} />
        {editModal && (
          <div className="modal-edit">
            <EditPost currPost={currPost} closeEditModal={closeEditModal} />
          </div>
        )}
        <div className="comment-box">
          <Avatar alt="Remy Sharp" src={loggedInUser.userAvatar} />
          <input
            className="reply-input"
            placeholder="comment"
            value={comment.reply}
            onChange={(e) => setComment({ ...comment, reply: e.target.value })}
          />
          {!comment.editReplyState ? (
            <Button
              className="btn-reply"
              variant="contained"
              size="small"
              onClick={() => {
                dispatch(addComment(comment));
                setComment({ ...comment, reply: "" });
              }}
            >
              reply
            </Button>
          ) : (
            <Button
              className="btn-reply"
              variant="contained"
              size="small"
              onClick={() => {
                dispatch(editComment(comment));
                setComment({ ...comment, reply: "", editReplyState: false });
              }}
            >
              edit
            </Button>
          )}
        </div>
        <ul className="mr-half comments">
          {singlePost?.comments?.map((ele) => (
            <li className="reply-input follow-user" key={ele._id}>
              <Avatar
                alt="Remy Sharp"
                src={
                  users?.filter((item) => item.username === ele.username)[0]
                    ?.userAvatar
                }
              />
              <div className="">
                <h3>{ele.username}</h3>
                <p>{ele.text}</p>
              </div>
              {editAndRemoveOptions(users, loggedInUser, ele) && (
                <div className="reply-icons">
                  <button
                    className="reply-icon"
                    onClick={() =>
                      setComment({
                        ...comment,
                        reply: ele.text,
                        editReplyState: true,
                        commentId: ele._id,
                      })
                    }
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="reply-icon"
                    onClick={() => {
                      dispatch(deleteComment({ PostId, ele }));
                      dispatch(getAllPosts());
                    }}
                  >
                    <RemoveIcon />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
      <Aside />
    </div>
  );
}
