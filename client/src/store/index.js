import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import editorReducer from "../redux/editor/index";
import userReducer from "../redux/user/index";
import customizerLoad from "../redux/customizer-load";

export default configureStore({
  reducer: {
    design: editorReducer,
    user: userReducer,
    customizerLoader: customizerLoad,
  },
  devTools: true,
});
