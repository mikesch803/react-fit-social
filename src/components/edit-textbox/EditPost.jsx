import React, { useState } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { EmojiIcon, GifIcon, ImageIcon } from "../../assets/icons/icons";
import "./EditPost.css";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../pages/home/postSlice";
import { userAvatar } from "../../assets/images/userAvatar";

export function EditPost({currPost, closeEditModal}) {
  const {user} = useSelector(state => state.auth);
  const [postContent, setPostContent] = useState({...currPost})
  const dispatch = useDispatch()
  return (
    <div className="textbox-container textbox-width">
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
          value={postContent.content}
          onChange={(e)=>setPostContent({...postContent, content:e.target.value})}

        ></textarea>
        
      <button className="card-dismis-btn" onClick={()=>dispatch(closeEditModal())}>&times;</button>
        <div className="textbox-icons">
          <IconButton>
            <ImageIcon />
          </IconButton>
          <IconButton>
            <GifIcon />
          </IconButton>
          <IconButton>
            <EmojiIcon />
          </IconButton>
          <Button className="btn-post" variant="contained" 
          onClick={()=>{ dispatch(editPost(postContent)); dispatch(closeEditModal())}}
          >post</Button>
        </div>
        
      </div>
    </div>
  );
}

