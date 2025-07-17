import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    setPreferredLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setPreferredLanguage } = configSlice.actions;
export default configSlice.reducer;
