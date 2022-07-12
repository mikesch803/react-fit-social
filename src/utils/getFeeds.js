export const getFeeds = (user, posts) => {
  return posts.filter(
    (post) =>
      post.username === user.username ||
      user?.following?.find((ele) => post?.username === ele?.username)
  );
};
