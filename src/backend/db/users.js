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
    bio: "selling meth with Heisenberg",
  },
  {
    _id: uuid(),
    email: "jeet@gmail.com",
    firstName: "Jeet",
    lastName: "Selal",
    username: "jeetselal",
    password: "jeetselal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/971071600777932800/tEOJFfYb_400x400.jpg",
    bio: "Fitness Coach▪️Youtube- 2.3 M ▪️Founder/CEO: Himalayan stallion Academy▪️Good Man",
  },
  {
    _id: uuid(),
    email: "beerBiceps@gmail.com",
    firstName: "Ranveer",
    lastName: "Allahbadia",
    username: "BeerBicepsGuy",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg",
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
      "https://pbs.twimg.com/profile_images/1381615220855091204/dLK1hpnY_400x400.jpg",
    bio: "10 years lifting experience | Building an online coaching business to help you build muscle and lose fat\n⭐Join my free telegram for fitness and mindset tips",
  },
  {
    _id: uuid(),
    email: "jamesclear@gmail.com",
    firstName: "James",
    lastName: "Clear",
    username: "jamesclear",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/958932211973152769/FUpkmn4u_400x400.jpg",
    bio: "Author of the #1 NYT bestseller Atomic Habits (http://atomichabits.com). I write about building good habits. Over 1 million people read my 3-2-1 newsletter (see below)",
  },
  {
    _id: uuid(),
    email: "mmanson@gmail.com",
    firstName: "Mark",
    lastName: "Manson",
    username: "IAmMarkManson",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/1204727725836996608/ByShSrLR_400x400.jpg",
    bio: "3x #1 NYTimes bestselling author of The Subtle Art of Not Giving a Fuck and others. OG blogger. Writing life advice that doesn't suck since 2008.",
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balak",
    username: "adarshbalak",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar: "",
    bio: "student at neogcamp",
  },
];
