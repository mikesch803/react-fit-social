import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../../data/nav-data";
import './Nav.css'
export function Nav() {
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
            to={link.to}
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
