import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BookmarkIcon,
  BookmarkSolidIcon,
  CommentIcon,
  FillHeartIcon,
  HeartLineIcon,
  OptionIcon,
  ShareIcon,
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
    <div className="post-card">
      <Avatar
        alt="avatar"
        src={item.username === user.username ? user.userAvatar : item.userAvatar}
        sx={{ width: 56, height: 56 }}
      />
      <div className="post-body">
        <h3 className="post-user" onClick={() => {
                  navigate(`/${item.username}`);
                }}>
          {item.name} <span className="ft-w-300">@{item.username}</span>
          <span
            className="m-l-auto m-r-half"
            onClick={() => setPostCardOption(!postCardOption)}
          >
            {user.username === item.username && <OptionIcon />}
          </span>
        </h3>
        {postCardOption && <PostCardOptions item={item} />}
        <p className="post-content">{item.content}</p>
        <div className="post-icons">
            { checkLikedByUser(item, user) ? (
            <span
              className="post-icon"
              onClick={() => dispatch(dislikePost(item))}
            >
              <FillHeartIcon />{" "}
              <span className="">
                {item.likes?.likeCount > 0 && item.likes?.likeCount}
              </span>
            </span>
          ) : (
            <span
              className="post-icon"
              onClick={() => dispatch(likePost(item))}
            >
              <HeartLineIcon />{" "}
              <span className="">
                {item.likes?.likeCount > 0 && item.likes?.likeCount}
              </span>
            </span>
          )}
          <span
            className="post-icon"
            onClick={() => {
              navigate(`/post/${item._id}`);
            }}
          >
            <CommentIcon />
          </span>
          <span className="post-icon">
            <ShareIcon />
          </span>
          {checkBookmark(bookmarks, item) ? (
            <span
              className="post-icon"
              onClick={() => dispatch(addToBookmark(item))}
            >
              <BookmarkIcon />
            </span>
          ) : (
            <span
              className="post-icon"
              onClick={() => dispatch(removeFromBookmark(item))}
            >
              <BookmarkSolidIcon />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
