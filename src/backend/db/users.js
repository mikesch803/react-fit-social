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
    name:"Jassi Pinkman",
    username: "jassipinkman",
    password: "jassipinkman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar: "",
  },
  {
    _id: uuid(),
    email : "jeet@gmail.com",
    firstName: "Jeet",
    lastName: "Selal",
    username: "jeetselal",
    password: "jeetselal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/971071600777932800/tEOJFfYb_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "Ranveer",
    lastName: "Allahbadia",
    username: "BeerBicepGuy",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "keith",
    lastName: "",
    username: "keith86",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/1381615220855091204/dLK1hpnY_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "James",
    lastName: "Clear",
    username: "jamesclear",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/958932211973152769/FUpkmn4u_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "Mark",
    lastName: "Manson",
    username: "IAmMarkManson",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "https://pbs.twimg.com/profile_images/1204727725836996608/ByShSrLR_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balak",
    username: "adarshbalak",
    email:"adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userAvatar:
      "",
  },
];
