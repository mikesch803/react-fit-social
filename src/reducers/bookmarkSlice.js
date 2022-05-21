import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  bookmarks: [],
  loading: false,
  error: "",
};


export const getAllBookmarks = createAsyncThunk(
    "bookmark/getAllBookmarks",
    async ({ rejectWithValue }) => {
        try {
        const token = localStorage.getItem("token");
      const response = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      return response.data.bookmarks;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addToBookmark = createAsyncThunk(
  "bookmark/addToBookmark",
  async (post, {rejectWithValue }) => {

    try {
        
        const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/bookmark/${post._id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast("Add to bookmark");
      return response.data.bookmarks;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);



export const removeFromBookmark = createAsyncThunk(
    "bookmark/removeFromBookmark",
    async (post,{ rejectWithValue }) => {
        try {
        const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/remove-bookmark/${post._id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast("Remove from bookmark");
      return response.data.bookmarks;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBookmarks.pending]: (state) => {
      state.loading = true;
    },
    [getAllBookmarks.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },
    [getAllBookmarks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addToBookmark.pending]: (state) => {
      state.loading = true;
    },
    [addToBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },
    [addToBookmark.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [removeFromBookmark.pending]: (state) => {
      state.loading = true;
    },
    [removeFromBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },
    [removeFromBookmark.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default bookmarkSlice.reducer;

