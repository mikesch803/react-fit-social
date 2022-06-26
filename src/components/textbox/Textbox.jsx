import React, { useState } from "react";
import Button from "@mui/material/Button";
import { EmojiIcon } from "../../assets/icons/icons";
import "./Textbox.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducers/postSlice";
import { Avatar, IconButton } from "@mui/material";
import { EmojiPicker } from "../index";

export function Textbox() {
  const { user } = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addPostHandler = () => {
    dispatch(
      addPost({
        name: user.firstName + " " + user.lastName,
        userAvatar: user.userAvatar,
        content: content,
        comments:[]
      })
    );
    setContent("");
    setShowEmojiPicker(false);
  };

  return (
    <div className="textbox-container">
      <div className="avatar avatar-ms m-r-half">
        <Avatar
          src={user.userAvatar}
          alt="avatar"
          sx={{ width: 56, height: 56 }}
        />
      </div>
      <div className="textbox-body">
        <textarea
          className="textbox "
          rows={7}
          value={content}
          placeholder="whats happening"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="textbox-icons">
          <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            <EmojiIcon />
          </IconButton>
          
          <Button
            className="btn-post"
            variant="contained"
            disabled={content.length === 0 || content.length >= 300}
            onClick={addPostHandler}
          >
            post
          </Button>
        </div>
        <div className="emoji-container">
          {showEmojiPicker && (
            <EmojiPicker setContent={setContent} content={content} />
          )}
        </div>
      </div>
    </div>
  );
}
