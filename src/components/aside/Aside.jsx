import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "../../assets/icons/icons";
import { userAvatar } from "../../assets/images/userAvatar";
import { otherUsers } from "../../utils";
import { Loader } from "../loader/Loader";
import "./Aside.css";
import { getAllUsers } from "../../reducers/userSlice";
import { follow, unfollow } from "../../reducers/authSlice";
export function Aside() {
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
    <div>
      <div className="aside">
        <div className="aside-searchbox">
          <input placeholder="search post, people, anything" />
          <SearchIcon />
        </div>
        <h3 className="follow-card-heading">
          who to follow?{" "}
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
                <div className="avatar avatar-ss avatar-img">
                  <img
                    src={item.userAvatar ? item.userAvatar : userAvatar}
                    alt="avatar"
                    className="circle-img"
                  />
                </div>
                <div>
                  <h3>
                    {item.firstName} {item.lastName}
                  </h3>
                  <span className="ft-w-300">@{item.username}</span>
                </div>
                {user.following.some((ele) => ele.username === item.username) ? (
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
