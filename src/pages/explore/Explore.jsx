import React from "react";
import Button from '@mui/material/Button';
import { usePostContext } from "../../context";
import "./Explore.css";
import { Aside, Nav, Textbox } from "../../components";
export function Explore() {
  const { post } = usePostContext();
  return (
    <div className="page">
      <Nav />
      <main className="main">
          <h2>Explore</h2>
          <div className="btn-container">   
          <Button variant="outlined" className="btn-category">Outlined</Button>
          <Button variant="outlined" className="btn-category">Outlined</Button>
          <Button variant="outlined" className="btn-category">Outlined</Button>
          </div>
        {post.map((item) => (
          <li key={item._id}>
            <Textbox item={item} />
          </li>
        ))}
      </main>
      <Aside />
    </div>
  );
}
