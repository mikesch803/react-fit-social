import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify"
const initialState = {
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),
  loading: false,
  error: "",
};


export const guestLogin = createAsyncThunk("auth/guestLogin", async (e,{rejectWithValue}) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/api/auth/login`, {
      username: "jeetselal",
      password: "jeetselal",
    });
    toast('Login successfully!')
    return response.data;
  } catch (error) {
    return rejectWithValue(error)
  }
});

export const login = createAsyncThunk(
  "auth/login",
  async (field,{rejectWithValue}) => {
    try {
      const response = await axios.post(`/api/auth/login`, field);
    toast('Login successfully!')
      return response.data;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);

export const signup = createAsyncThunk('auth/signup',
async (field,{rejectWithValue}) => {
  try {
    const response = await axios.post(`/api/auth/signup`, field);
    toast('Signup successfully!')
    return response.data;
  } catch (error) {
    return rejectWithValue(error)
  }
}
)

export const follow = createAsyncThunk(
  "user/follow",
  async (followUser, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/follow/${followUser._id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('followed')
      return response.data.followUser;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const unfollow = createAsyncThunk(
  "users/unfollow",
  async (followUser, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/unfollow/${followUser._id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast('unfollowed')
      return response.data.followUser;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editUserProfile = createAsyncThunk("auth/editUserProfile", async (userData, {rejectWithValue}) => {
  const token = localStorage.getItem('token')
  try {
    const response = await axios.post("/api/users/edit",{
      userData
    },{
      headers : {
        authorization : token
      }
    });
    console.log(response.data.user)
    return response.data.user;
  } catch (err) {
    return rejectWithValue(err)
  }
});


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler:()=>{
      localStorage.clear();
      return {
        user:null,
        token:null
      }
    }
  },
  extraReducers: {
    [guestLogin.pending]: (state) => {
      state.loading = true;
    },
    [guestLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user))
    },
    [guestLogin.rejected]:(state, action) => {
      state.loading = false;
      state.error = action.payload
    },

    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user))
    },
    [login.rejected]:(state, action) => {
      state.loading = false;
      state.error = action.payload
    },

    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user))
    },
    [signup.rejected]:(state, action) => {
      state.loading = false;
      state.error = action.payload
    },

    [follow.pending]: (state) => {
      state.loading = true;
    },
    [follow.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.following = [...state.user.following, action.payload];
    },
    [follow.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [unfollow.pending]: (state) => {
      state.loading = true;
    },
    [unfollow.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.following = state.user.following.filter(item => item.username !== action.payload.username);
    },
    [unfollow.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [editUserProfile.pending]: (state) => {
      state.loading = true;
    },
    [editUserProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [editUserProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    
  },
});

export const {logoutHandler} = authSlice.actions;

export default authSlice.reducer;
