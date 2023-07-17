import { createSlice } from "@reduxjs/toolkit";

const customizerLoaderSlice = createSlice({
  name: "customizerLoader",
  initialState: true,
  reducers: {
    UpdateCustomizerLoader: (state, action) => {
      return action.payload;
    },
  },
});

export const { UpdateCustomizerLoader } = customizerLoaderSlice.actions;
export default customizerLoaderSlice.reducer;
