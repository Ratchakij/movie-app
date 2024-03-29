import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import movieSlice from "./movieSlice";
import wishSlice from "./wishSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    movies: movieSlice,
    wishlists: wishSlice,
  },
});

export default store;
