import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearchView: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },

    toggleGptSearchView: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { setSearchResults, toggleGptSearchView, addGptMovieResult } =
  gptSearchSlice.actions;
export default gptSearchSlice.reducer;
