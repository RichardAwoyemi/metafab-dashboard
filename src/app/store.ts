import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from '../features/login/UserLoginSlice';

export const store = configureStore({
  reducer: {
    login: userLoginReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
