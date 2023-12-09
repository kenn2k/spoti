// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    name: null,
    token: null,
    id: null,
  },
  reducers: {
    setUser(state, action) {
      //* в качестве payload приходят данные, которые нужно устанавливать
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.token = null;
      state.id = null;
      state.email = null;
      localStorage.removeItem("auth");
    },
  },
});

export const userAuthActions = userSlice.actions;
export default userSlice;
