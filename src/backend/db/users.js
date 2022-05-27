import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    email: "jassipinkman@gmail.com",
    firstName: "Jassi",
    lastName: "Pinkman",
    username: "jassipinkman",
    password: "jassipinkman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar: "https://i1.sndcdn.com/avatars-000160006869-aphabw-t500x500.jpg",
    bio: "fun with Heisenberg",
  },
  {
    _id: uuid(),
    email: "jeet@gmail.com",
    firstName: "Jeeten",
    lastName: "Shah",
    username: "jeeten",
    password: "jeeten",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "",
    bio: "Fitness Coach▪️Youtube- 2.3 M ▪️Good Man",
  },
  {
    _id: uuid(),
    email: "Ranvijaysingh@gmail.com",
    firstName: "Ranvijay",
    lastName: "Singh",
    username: "ranvijay",
    password: "ranvijay",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "",
    bio: "Tweets about Growth, Health and general Self-Improvement.",
  },
  {
    _id: uuid(),
    email: "keith86@gmail.com",
    firstName: "keith",
    lastName: "",
    username: "keith86",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "",
    bio: "10 years lifting experience | Building an online coaching business to help you build muscle and lose fat\n⭐Join my free telegram for fitness and mindset tips",
  },
  {
    _id: uuid(),
    email: "jayeshpatil@gmail.com",
    firstName: "Jayesh",
    lastName: "Patil",
    username: "jayeshpatil",
    password: "jayeshpatil",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "",
    bio: "I write about building good habits. Over 1 million people read my 3-2-1 newsletter",
  },
  {
    _id: uuid(),
    email: "mmanson@gmail.com",
    firstName: "Mick",
    lastName: "Manson",
    username: "mickmanson",
    password: "mickmanson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "",
    bio: "Writing life advice that doesn't suck since 2008.",
  },
  {
    _id: uuid(),
    firstName: "Mahendra",
    lastName: "Chauhan",
    username: "mikesch_34",
    email: "mahendrachauhan@gmail.com",
    password: "mahendra",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar: "https://pbs.twimg.com/profile_images/1459403696953966593/swzFkftU_400x400.jpg",
    bio: "Aspiring Full stack developer",
  },
];
