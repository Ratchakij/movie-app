import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  removeAccessUser,
  setAccessUser,
  getAccessUser,
} from "../utils/localstorage";
import { userData } from "../data/data";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const user = userData.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        setAccessUser(user);
        // setAccessUser(JSON.stringify(user));
        return user;
      } else {
        throw new Error("Access Denied! Invalid Credentials");
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  removeAccessUser();
});

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const user = getAccessUser();
    if (!user) return;
    return user;
  } catch (err) {
    return thunkApi.rejectWithValue("No User found", err);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
      });
  },
});

export default authSlice.reducer;
