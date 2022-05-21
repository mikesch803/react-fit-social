import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutIcon } from "../../assets/icons/icons";
import { default as logo } from "../../assets/images/logo.png";
import { logoutHandler } from "../../reducers/authSlice";
import "./Header.css";
export function Header() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" width="40px" height="40px" />
        <h1>Connect</h1>
      </Link>
      {token && (
        <button
          className="btn-logout"
          onClick={() => dispatch(logoutHandler())}
        >
          <LogoutIcon />
        </button>
      )}
    </div>
  );
}
