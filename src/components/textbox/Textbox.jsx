import React from "react";
import Button from '@mui/material/Button';
import { EmojiIcon, GifIcon, ImageIcon } from "../../assets/icons/icons";
import "./Textbox.css";
import { useSelector } from "react-redux";
export function Textbox() {
  const {user} = useSelector(state => state.auth)
  return (
    <div className="textbox-container">
      <div className="avatar avatar-ms m-r-half">
        <img src={user.userAvatar}
          alt="avatar"
          className="circle-img"
        />
      </div>
      <div className="textbox-body">
        <textarea
          className="textbox "
          rows={7}
          placeholder="whats happening"
        ></textarea>
        <div className="textbox-icons">
          <span>
            <ImageIcon />
          </span>
          <span>
            <GifIcon />
          </span>
          <span>
            <EmojiIcon />
          </span>
          <Button className="btn-post" variant="contained">post</Button>
        </div>
      </div>
    </div>
  );
}
