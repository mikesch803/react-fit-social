import React from "react";
import Button from "@mui/material/Button";
import "./Profile.css";
import { Aside, Nav, PostCard } from "../../components";
export function Profile() {
  return (
    <div className="page">
      <Nav />
      <main className="main">
        <div className="profile-detail-container m-tb-1">
          <img
            src="https://pbs.twimg.com/profile_images/1459403696953966593/swzFkftU_400x400.jpg"
            alt="profile-pic"
            className="profile-img"
          />
          <h2 className="m-0">Mahendra Chauhan</h2>
          <span>@mikesch_34</span>
          <Button variant="outlined">Edit Profile</Button>
          <small>growing with @neogcamp</small>
        </div>
        <div className="flex-container m-tb-1">
          <div className="mb-1">
            <h2>114</h2>
            <p>following</p>
          </div>
          <div className="mb-1">
            <h2>60</h2>
            <p>followers</p>
          </div>
          <div className="mb-1">
            <h2>93</h2>
            <p>posts</p>
          </div>
        </div>
        <h2 className="mb-1">Your Posts</h2>
        {/* {post.map((item) => (
          <li key={item._id}>
            <PostCard item={item} />
          </li>
        ))} */}
      </main>
      <Aside />
    </div>
  );
}
