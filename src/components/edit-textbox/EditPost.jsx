import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { EmojiIcon } from "../../assets/icons/icons";
import "./EditPost.css";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../reducers/postSlice";
import { Avatar } from "@mui/material";
import { EmojiPicker } from "../emoji-picker/EmojiPicker";

export function EditPost({ currPost, closeEditModal }) {
  const { user } = useSelector((state) => state.auth);
  const [postContent, setPostContent] = useState(currPost.content);
  const dispatch = useDispatch();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const editPostHandler =() => {
    dispatch(editPost({
     ...currPost, content : postContent
    }));
    dispatch(closeEditModal());
  }

  return (
    <div className="textbox-container textbox-width" onClick={e=>e.stopPropagation()}>
      <div className="avatar avatar-ms m-r-half">
        <Avatar src={user.userAvatar} alt="avatar" />
      </div>
      <div className="textbox-body">
        <textarea
          className="textbox "
          rows={7}
          placeholder="whats happening"
          value={postContent}
          onChange={(e) =>
            setPostContent(e.target.value)
          }
        ></textarea>

        <button
          className="card-dismis-btn"
          onClick={() => dispatch(closeEditModal())}
        >
          &times;
        </button>
        <div className="textbox-icons">
        <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            <EmojiIcon />
          </IconButton>
          <Button
            className="btn-post"
            variant="contained"
            disabled={postContent.length === 0 || postContent.length >= 300}
            onClick={editPostHandler}
          >
            post
          </Button>
        </div>
        <div className="emoji-container">
          {showEmojiPicker && (
            <EmojiPicker setContent={setPostContent}  />
          )}
        </div>
      </div>
    </div>
  );
}