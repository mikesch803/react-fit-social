import React from "react";
import Button from '@mui/material/Button';
import { EmojiIcon, GifIcon, ImageIcon } from "../../assets/icons/icons";
import "./Textbox.css";
export function Textbox() {
  return (
    <div className="textbox-container">
      <div className="avatar avatar-ms m-r-half">
        <img src="https://pbs.twimg.com/profile_images/1459403696953966593/swzFkftU_400x400.jpg"
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
