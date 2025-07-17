import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    searchResults: [],
    showGptSearchView: false,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },

    toggleGptSearchView: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
  },
});

export const { setSearchResults, toggleGptSearchView } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
