export const otherUsers = (users,loggedInUser) => users.filter(item => item.email !== loggedInUser.email)