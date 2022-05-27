import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    userAvatar: "",
    content:
      "Five Ways to Be More Productive Each Day:\n\n1. Better sleep—no caffeine, alcohol, sugar before bed \n2. Wake up earlier—see: birds and worms, etc. \n3. Do your most important task first thing\n4. No email, texting, social media until after lunch\n5. Get up and go for a walk",
    likes: {
      likeCount: 1780,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Mick Manson",
    username: "mickmanson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id: uuid(),
    userAvatar: "",
    content:"Starting your day with meditation is like building a “daily safety net” for the acrobatics of your mind.\n\nMuch needed in professions that involve creativity, strategy or problem solving. Oops that’s all professions",
    likes: {
      likeCount: 1601,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Ranvijay Singh",
    username: "ranvijay",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id: uuid(),
    userAvatar: "",
    content:"If you are seeking for peace and harmony in the world around you..Seek for peace and harmony within yourself first 🙏🏻\n#innerpeace",
    likes: {
      likeCount: 247,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Jeeten Shah",
    username: "jeeten",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "jassipinkman",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "jayeshpatil",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    userAvatar: "",
    content:"An underrated form of mental toughness:\n\n“I can be happy anywhere.”",
    likes: {
      likeCount: 6514,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Jayesh Patil",
    username: "jayeshpatil",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id: uuid(),
    userAvatar: "",
    content:"What beginners need to know about their fitness journey\n\n- food is energy\n- cardio is a tool, not punishment\n- toning = building muscle while losing body fat\n- the people you want to look like have been working out for years\n- drinking every weekend will slow your progress",
    likes: {
      likeCount: 536,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Keith",
    username: "keith86",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments:[]
  },
];

