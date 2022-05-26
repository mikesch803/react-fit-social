import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  posts: [],
  loading: false,
  error: "",
  editModal:false,
  currPost:{}, //for edit post
  singlePost:{} //for single post page
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

export const likePost = createAsyncThunk(
  "posts/likePost",
  async (post, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/posts/like/${post._id}`,
        {
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('Post liked')
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async (post, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/posts/dislike/${post._id}`,
        {
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('Post disliked')
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getSinglePost = createAsyncThunk("posts/getSinglePost",
async (id, {rejectWithValue}) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`/api/posts/${id}`,{
      headers : {
        authorization : token
      }
    })
    return response.data.post
  } catch(err) {
    return rejectWithValue(err)
  }
})

export const getAllComments = createAsyncThunk(
  "posts/getAllComments",
  async (id,{ rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `/api/comments/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data.comments;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({item, reply}, { rejectWithValue }) => {
    if(reply.trim("")!==""){
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/comments/add/${item}`,
        {
          commentData:{text:reply}
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('comment added')
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
}
);

export const editComment = createAsyncThunk(
  "posts/addComment",
  async ({item, reply, commentId}, { rejectWithValue }) => {
    if(reply.trim("")!==""){
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/comments/edit/${item}/${commentId}`,
        {
          commentData:{text:reply}
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('comment updated')
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
}
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async (item, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/comments/delete/${item.PostId}/${item.ele._id}`,{},
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('comment deleted')
      return response.data.comments;
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
    [likePost.pending]: (state) => {
      state.loading = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [likePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;

    },
    [dislikePost.pending]: (state) => {
      state.loading = true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [dislikePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getSinglePost.pending]: (state) => {
      state.loading = true;
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.singlePost = action.payload;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    
    [addComment.pending]: (state) => {
      state.loading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [addComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [editComment.pending]: (state) => {
      state.loading = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [editComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {openEditModal, closeEditModal} = postSlice.actions;

export default postSlice.reducer;
