import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  posts: [],
  loading: false,
  error: "",
  editModal:false,
  currPost:{}
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data.posts;
  } catch (err) {
    console.log(err);
  }
});

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "/api/posts",
        {
          postData:post,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('New post added')
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (post, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.delete(
        `/api/posts/${post._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('Post deleted')
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (post, { rejectWithValue }) => {
    console.log(post)
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/posts/edit/${post._id}`,
        {
          postData : post,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('Post updated')
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers:{
    openEditModal:(state,action)=> {
      state.currPost = action.payload;
      state.editModal = true;
    },
    closeEditModal:(state)=>{
      state.editModal = false;
    },
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addPost.pending]: (state) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [addPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [editPost.pending]: (state) => {
      state.loading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {openEditModal, closeEditModal} = postSlice.actions;

export default postSlice.reducer;
