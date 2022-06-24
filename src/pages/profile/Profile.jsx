import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../reducers/authSlice";
import { Aside, EditPost, EditProfileModal, Loader, Nav, PostCard } from "../../components";
import { useParams } from "react-router-dom";
import { checkFollowing } from "../../utils";
import Button from "@mui/material/Button";
import "./Profile.css";
import { useTitle } from "../../hooks";
import {  closeEditModal, getAllPosts } from "../../reducers/postSlice";
import { Avatar } from "@mui/material";
import { getAllUsers } from "../../reducers/userSlice";
export function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { posts, loading,  editModal, currPost } = useSelector((state) => state.posts);
  const { users: allUsers } = useSelector((state) => state.users);
  const { username } = useParams();

  const profileUser = allUsers.find(item => item.username === username)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllPosts())
    dispatch(getAllUsers())
  },[user])

  
useTitle("Profile")

  return (
    <div className="page">
      <Nav />
      <main className="main">
        <div className="profile-detail-container m-tb-1">
          <Avatar sx={{width:56, height:56}}
            src={profileUser?.userAvatar}
            alt="profile-pic"
            className="profile-img"
          />
          <h2 className="m-0">
            {profileUser?.firstName} {profileUser?.lastName}
          </h2>
          <span>@{profileUser?.username}</span>
          {profileUser?.username === user.username ? (
            <EditProfileModal profileUser={profileUser} />
          ) : checkFollowing(user, profileUser) ? (
            <Button
              variant="outlined"
              onClick={() => dispatch(unfollow(profileUser))}
            >
              following
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => dispatch(follow(profileUser))}
            >
              follow
            </Button>
          )}
          <small>{profileUser?.bio}</small>
        </div>
        <div className="flex-container m-tb-1">
          <div className="mb-1">
            <h2>{profileUser?.following.length}</h2>
            <p>following</p>
          </div>
          <div className="mb-1">
            <h2>{profileUser?.followers.length}</h2>
            <p>followers</p>
          </div>
          <div className="mb-1">
            <h2>
              {
                posts.filter((post) => post.username === profileUser?.username)
                  .length
              }
            </h2>
            <p>posts</p>
          </div>
        </div>
        <h2 className="mb-1">Your Posts</h2>

        {loading ? (
          <Loader />
        ) : (
          posts
            .filter((post) => post.username === profileUser?.username)
            .map((item) => (
              <li key={item._id}>
                <PostCard item={item} />
              </li>
            ))
        )}
      </main>
        {editModal && (
          <div className="modal-edit">
            <EditPost currPost={currPost} closeEditModal={closeEditModal} />
          </div>
        )}
      <Aside />
    </div>
  );
}