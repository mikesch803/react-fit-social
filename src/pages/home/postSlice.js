import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data.posts;
  } catch (err) {
    console.log(err);
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
