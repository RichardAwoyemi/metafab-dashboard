// Ducks Pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | undefined;
}

const initialState: UserState = {
  username: undefined,
};

const userLoginSlice = createSlice({
  name: "user-login",
  initialState,
  reducers: {
    login(state, loginDetails: PayloadAction<string>) {
      state.username = loginDetails.payload;
    },
    logout(state) {
      state.username = undefined;
    },
  },
});

export const { login, logout } = userLoginSlice.actions;
export default userLoginSlice.reducer;