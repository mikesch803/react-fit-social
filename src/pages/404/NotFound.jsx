import React from "react";
import Button from "@mui/material/Button";
import { Nav } from "../../components";
import "./NotFound.css";
import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <div className="not-found-container">
          <p className="ft-grey ft-w-300">Hmm... this page doesn't exist.</p>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
