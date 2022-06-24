import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navData } from "../../data/nav-data";
import "./Nav.css";
export function Nav() {
  const { user } = useSelector((state) => state.auth);
  const NavLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? `` : "black",
    };
  };
  return (
    <nav className="nav">
      <div className="sidebar">
        {navData.map((link, index) => (
          <NavLink
            style={NavLinkStyles}
            to={link.to === "/profile" ? `/profile/${user.username}` : link.to}
            className={NavLinkStyles ? "btn btn-link" : "btn"}
            key={index}
          >
            <span className="nav-icons">{link.icon}</span>
            {link.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
