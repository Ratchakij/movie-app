import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movieListing", // name of slice/store
  initialState, // default value state
  reducers: {
    // reducers
    addMovie: (state, action) => {
      state.movies = action.payload;
    //   console.log(current(state)); // ตรวจสอบค่าใน state
    },
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
