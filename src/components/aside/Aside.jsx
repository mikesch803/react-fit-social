import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkFollowing, otherUsers } from "../../utils";
import { Loader } from "../loader/Loader";
import "./Aside.css";
import { getAllUsers } from "../../reducers/userSlice";
import { follow, unfollow } from "../../reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
export function Aside() {
  const navigate = useNavigate();
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const { user } = useSelector((state) => state.auth);
  const [showMoreUsers, setShowMoreUsers] = useState(false);
  const showMoreHandler = (users, user) => {
    return showMoreUsers
      ? otherUsers(users, user)
      : otherUsers(users, user).slice(0, 2);
  };
  return (
    <div className="aside">
      <div className="sidebar">
        <h3 className="follow-card-heading">
          who to follow?
          <span
            className="m-l-auto btn-show-more"
            onClick={() => setShowMoreUsers(!showMoreUsers)}
          >
            {showMoreUsers ? <>show less</> : <>show more</>}
          </span>
        </h3>
        <div className="follow-card">
          {loading ? (
            <Loader />
          ) : (
            showMoreHandler(users, user).map((item) => (
              <div className="follow-user" key={item._id}>
                <Avatar
                  onClick={() => {
                    navigate(`/profile/${item.username}`);
                  }}
                  alt="avatar"
                  src={item.userAvatar}
                  sx={{ marginRight: "0.5rem" }}
                />

                <div
                  onClick={() => {
                    navigate(`/profile/${item.username}`);
                  }}
                >
                  <h3>
                    {item.firstName} {item.lastName}
                  </h3>
                  <span className="ft-w-300">@{item.username}</span>
                </div>
                {checkFollowing(user, item) ? (
                  <button
                    className="m-l-auto"
                    onClick={() => dispatch(unfollow(item))}
                  >
                    following
                  </button>
                ) : (
                  <button
                    className="m-l-auto"
                    onClick={() => dispatch(follow(item))}
                  >
                    follow+
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
