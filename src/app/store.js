import { configureStore } from "@reduxjs/toolkit";
import { authReducer, bookmarkReducer, postReducer, userReducer } from "../reducers";
// import {authReducer, bookmarkReducer, postReducer, userReducer} from './index'
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users : userReducer,
    auth : authReducer,
    bookmark : bookmarkReducer
  },
});
