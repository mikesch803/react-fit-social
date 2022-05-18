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
      email: "jeet@gmail.com",
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
  },
});

export const {logoutHandler} = authSlice.actions;

export default authSlice.reducer;
