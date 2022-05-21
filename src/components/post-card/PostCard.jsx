import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BookmarkIcon,
  BookmarkSolidIcon,
  CommentIcon,
  HeartLineIcon,
  OptionIcon,
  ShareIcon,
} from "../../assets/icons/icons";
import { userAvatar } from "../../assets/images/userAvatar";
import { PostCardOptions } from "../card-options/PostCardOptions";
import { addToBookmark, removeFromBookmark } from "../../reducers/bookmarkSlice";
import "./PostCard.css";
import { checkBookmark } from "../../utils";
export function PostCard({item}) {
  const [postCardOption,  setPostCardOption] = useState(false);
  const {bookmarks} = useSelector(state => state.bookmark)
  const dispatch = useDispatch();
  return (
    <div className="post-card">
      <img
        className="post-avatar m-r-half"
        src={item.userAvatar?item.userAvatar:userAvatar}
        alt="avatar"
      />

      <div className="post-body">
        <h3 className="post-user">
          {item.name} <span className="ft-w-300">@{item.username}</span>
          <span className="m-l-auto m-r-half" 
          onClick={()=>setPostCardOption(!postCardOption)}
          >
            <OptionIcon />   
          </span>
        </h3>
        { postCardOption && <PostCardOptions item={item}/> }
        <p className="post-content">
          {item.content}
        </p>
        <div className="post-icons">
          <span className="post-icon">
            <HeartLineIcon /> <span className="">
              {item.likes.likeCount > 0 && item.likes.likeCount}
              </span>
          </span>
          <span className="post-icon">
            <CommentIcon />
          </span>
          <span className="post-icon">
            <ShareIcon />
          </span>
          {
            checkBookmark(bookmarks,item) ?
            <span className="post-icon" onClick={()=>dispatch(addToBookmark(item))}>
            <BookmarkIcon />
          </span> :
          <span className="post-icon" onClick={()=>dispatch(removeFromBookmark(item))}>
          <BookmarkSolidIcon />
        </span>
          }
        </div>
      </div>
    </div>
  );
}
