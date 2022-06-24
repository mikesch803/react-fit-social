import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BookmarkIcon,
  BookmarkSolidIcon,
  CommentIcon,
  FillHeartIcon,
  HeartLineIcon,
  OptionIcon
} from "../../assets/icons/icons";
import { PostCardOptions } from "../card-options/PostCardOptions";
import {
  addToBookmark,
  removeFromBookmark,
} from "../../reducers/bookmarkSlice";

import {
  likePost,
  dislikePost
} from "../../reducers/postSlice";
import "./PostCard.css";
import { checkBookmark, checkLikedByUser } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
export function PostCard({ item }) {
  const [postCardOption, setPostCardOption] = useState(false);
  const { bookmarks } = useSelector((state) => state.bookmark);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="post-card" >
      <Avatar onClick={() => {
                  navigate(`/profile/${item.username}`);
                }}
        alt="avatar"
        src={item.username === user.username ? user?.userAvatar : item?.userAvatar}
        sx={{ width: 56, height: 56, cursor:"pointer" }}
      />
      <div className="post-body">
        <h3 className="post-user ft-w-600" >
          {item.name} <span className="ft-w-400 ft-grey" onClick={() => {
                  navigate(`/profile/${item.username}`);
                }}>@{item.username}</span>
          <span
            className="m-l-auto m-r-half"
            onClick={() => setPostCardOption(!postCardOption)}
          >
            {user.username === item.username && <OptionIcon />}
          </span>
        </h3>
        {postCardOption && <PostCardOptions item={item} setPostCardOption={setPostCardOption}/>}
        <p className="post-content">{item.content}</p>
        <div className="post-icons">
            { checkLikedByUser(item, user) ? (
            <button
              className="post-icon"
              onClick={() => dispatch(dislikePost(item))}
            >
              <FillHeartIcon />
              <span>
                {item.likes?.likeCount > 0 && item.likes?.likeCount}
              </span>
            </button>
          ) : (
            <button
              className="post-icon"
              onClick={() => dispatch(likePost(item))}
            >
              <HeartLineIcon />
              <span>
                {item.likes?.likeCount > 0 && item.likes?.likeCount}
              </span>
            </button>
          )}
          <button
            className="post-icon ft-grey"
            onClick={() => {
              navigate(`/post/${item._id}`);
            }}
          >
            <CommentIcon />
          </button>
          {checkBookmark(bookmarks, item) ? (
            <button
              className="post-icon ft-grey"
              onClick={() => dispatch(addToBookmark(item))}
            >
              <BookmarkIcon />
            </button>
          ) : (
            <button
              className="post-icon ft-grey"
              onClick={() => dispatch(removeFromBookmark(item))}
            >
              <BookmarkSolidIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
