import React from "react";
import { Link } from "react-router-dom";
import {default as logo} from '../../assets/images/logo.png';
import "./Header.css";
export function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt='logo' width="40px" height="40px"/>
        <h1>Connect</h1>
      </Link>
    </div>
  );
}