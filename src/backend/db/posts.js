import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    userAvatar: "https://pbs.twimg.com/profile_images/2866198511/a55e7955fbcde7f3df81db47e40f6084_400x400.jpeg",
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
    userAvatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
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
    userAvatar: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
    userAvatar: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
    userAvatar: "https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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

