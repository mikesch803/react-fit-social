import React from "react";
import {
  BookmarkIcon,
  CommentIcon,
  HeartLineIcon,
  OptionIcon,
  ShareIcon,
} from "../../assets/icons/icons";
import "./PostCard.css";
export function PostCard({item}) {
  return (
    <div className="post-card">
      <img
        className="post-avatar m-r-half"
        src={item.userAvatar}
        alt="avatar"
      />

      <div className="post-body">
        <h3 className="post-user">
          {item.name} <span className="ft-w-300">{item.username}</span>
          <span className="m-l-auto m-r-half">
            <OptionIcon />
          </span>
        </h3>
        <p className="post-content">
          {item.content}
        </p>
        <div className="post-icons">
          <span>
            <HeartLineIcon />{item.likes.likeCount > 0 && item.likes.likeCount}
          </span>
          <span>
            <CommentIcon />
          </span>
          <span>
            <ShareIcon />
          </span>
          <span>
            <BookmarkIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
