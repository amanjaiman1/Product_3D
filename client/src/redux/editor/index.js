import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
export const editorSlice = createSlice({
  name: "editor",
  initialState: [
    {
      id: uuid(),
      data: {
        intro: true,
        color: "#EFBD48",
        isLogoTexture: true,
        isFullTexture: false,
        logoDecal: "./threejs.png",
        fullDecal: "./threejs.png",
      },
    },
  ],
  reducers: {
    addDesign: (state, action) => {
      const design = {
        id: uuid(),
        data: action.payload,
      };
      return [...state, design];
    },
    updateDesign: (state, action) => {
      const { id, data } = action.payload;

      const design = state.find((design) => design.id === id);
      design.data = data;
    },
    deleteDesign: (state, action) => {
      return state.filter((design) => design.id !== action.payload);
    },
  },
});

export const { addDesign, updateDesign, deleteDesign } = editorSlice.actions;

export default editorSlice.reducer;
