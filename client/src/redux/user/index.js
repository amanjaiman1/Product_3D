import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      email: undefined,
      name: undefined,
    },
    isLoggedIn: false,
  },
  reducers: {
    updateUser: (state, action) => {
      console.log("[ACTION]", action);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
