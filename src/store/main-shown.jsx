import { createSlice } from "@reduxjs/toolkit";

const initialState = { isMainShown: false };

const afterRegister = createSlice({
  name: "main",
  initialState,
  reducers: {
    showMain(state) {
      state.isMainShown = true;
    },
  },
});

export const showActions = afterRegister.actions;
export default afterRegister;
