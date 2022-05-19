import { configureStore } from "@reduxjs/toolkit";
import {authReducer, postReducer, userReducer} from './index'
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users : userReducer,
    auth : authReducer
  },
});
