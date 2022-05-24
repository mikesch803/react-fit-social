import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../../data/nav-data";
import './NavbarBottom.css';
export function NavbarBottom() {
    
    const NavLinkStyles = ({ isActive }) => {
        return {
          color: isActive ? `var(--COLOR-PRIMARY)` : "inherit"
        };
      };
  return (
      <div className="navbar-bottom">
        <div className="navbar-bottom-icons">
        {navData.map((link, index) => (
          <NavLink style={NavLinkStyles} to={link.to} className={NavLinkStyles?'btn btn-link':'btn'} key={index}>
            <span>{link.icon}</span>
          </NavLink>
        ))}
      </div>
      </div>
  );
}