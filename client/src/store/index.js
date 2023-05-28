import { configureStore } from '@reduxjs/toolkit';
import editorReducer from '../redux/editor/index'

export default configureStore({
  reducer: {
    design: editorReducer,
  },
});