import React, { useState } from "react";
import Button from '@mui/material/Button';
import { EmojiIcon, GifIcon, ImageIcon } from "../../assets/icons/icons";
import "./Textbox.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducers/postSlice";
import { userAvatar } from "../../assets/images/userAvatar";

export function Textbox() {
  const {user} = useSelector(state => state.auth);
  const [postContent, setPostContent] = useState({name:user.firstName+" "+user.lastName})
  const dispatch = useDispatch()
  return (
    <div className="textbox-container">
      <div className="avatar avatar-ms m-r-half">
        <img src={user.userAvatar?user.userAvatar:userAvatar}
          alt="avatar"
          className="circle-img"
        />
      </div>
      <div className="textbox-body">
        <textarea
          className="textbox "
          rows={7}
          placeholder="whats happening"
          onChange={(e)=>setPostContent({...postContent, content:e.target.value})}
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
          <Button className="btn-post" variant="contained" onClick={()=>dispatch(addPost(postContent))}>post</Button>
        </div>
      </div>
    </div>
  );
}
