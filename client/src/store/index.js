import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import editorReducer from '../redux/editor/index'
import userReducer from '../redux/user/index'

export default configureStore({
  reducer: {
    design: editorReducer,
    user:userReducer
  },
  devTools:true
});
