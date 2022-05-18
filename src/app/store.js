import { configureStore } from "@reduxjs/toolkit";
import {postReducer, userReducer} from './index'
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users : userReducer
  },
});
