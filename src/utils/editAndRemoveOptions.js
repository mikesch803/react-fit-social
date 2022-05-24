export const editAndRemoveOptions = (users, loggedInUser, commentUser) => users.filter(item => item.username === loggedInUser.username)[0].username === commentUser.username
