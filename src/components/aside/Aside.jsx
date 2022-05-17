import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "../../assets/icons/icons";
import { userAvatar } from "../../assets/images/userAvatar";
import { Loader } from "../loader/Loader";
import "./Aside.css";
import { getAllUsers } from "./userSlice";
export function Aside() {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      <div className="aside">
        <div className="aside-searchbox">
          <input placeholder="search post, people, anything" />
          <SearchIcon />
        </div>
        <h3 className="follow-card-heading">
          who to follow? <span className="m-l-auto">show more</span>
        </h3>
        <div className="follow-card">
          {loading ? (
            <Loader />
          ) : (
            users.map((user) => (
              <div className="follow-user" key={user._id} >
                <div className="avatar avatar-ss avatar-img">
                  <img
                    src={user.userAvatar ? user.userAvatar : userAvatar}
                    alt="avatar"
                    className="circle-img"
                  />
                </div>
                <div>
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  <span className="ft-w-300">@{user.username}</span>
                </div>
                <button className="m-l-auto">follow+</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
