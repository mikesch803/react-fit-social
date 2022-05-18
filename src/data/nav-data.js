import {
    HomeIcon,
    UserIcon,
    ExploreIcon,
    BookmarkIcon,
    NotificationIcon,
  } from "../assets/icons/icons";
export  const navData = [
    { to: "/home", icon: <HomeIcon />, text: "home" },
    { to: "/explore", icon: <ExploreIcon />, text: "explore" },
    { to: "/bookmark", icon: <BookmarkIcon />, text: "bookmarks" },
    { to: "/notification", icon: <NotificationIcon />, text: "notifications" },
    { to: "/profile", icon: <UserIcon />, text: "profile" },
  ];