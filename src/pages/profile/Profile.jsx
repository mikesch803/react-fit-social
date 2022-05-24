import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../reducers/authSlice";
import { Aside, EditProfileModal, Loader, Nav, PostCard } from "../../components";
import { useParams } from "react-router-dom";
import { checkFollowing } from "../../utils";
import { userAvatar } from "../../assets/images/userAvatar";
import Button from "@mui/material/Button";
import "./Profile.css";
import { useTitle } from "../../hooks";
export function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { posts, loading } = useSelector((state) => state.posts);
  const { users: allUsers } = useSelector((state) => state.users);
  const { username } = useParams();

  const [profileUser, setProfileUser] = useState(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = allUsers.find((item) => item.username === username);

    if (currentUser) {
      setProfileUser(currentUser);
    } else {
      setProfileUser(user);
    }
  }, [allUsers, user, profileUser, posts, username]);
  
useTitle("Profile")

  return (
    <div className="page">
      <Nav />
      <main className="main">
        <div className="profile-detail-container m-tb-1">
          <img
            src={profileUser.userAvatar ? profileUser.userAvatar : userAvatar}
            alt="profile-pic"
            className="profile-img"
          />
          <h2 className="m-0">
            {profileUser.firstName} {profileUser.lastName}
          </h2>
          <span>@{profileUser.username}</span>
          {profileUser.username === user.username ? (
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
          <small>{profileUser.bio}</small>
        </div>
        <div className="flex-container m-tb-1">
          <div className="mb-1">
            <h2>{profileUser.following.length}</h2>
            <p>following</p>
          </div>
          <div className="mb-1">
            <h2>{profileUser.followers.length}</h2>
            <p>followers</p>
          </div>
          <div className="mb-1">
            <h2>
              {
                posts.filter((post) => post.username === profileUser.username)
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
            .filter((post) => post.username === profileUser.username)
            .map((item) => (
              <li key={item._id}>
                <PostCard item={item} />
              </li>
            ))
        )}
      </main>
      <Aside />
    </div>
  );
}
