import { configureStore } from "@reduxjs/toolkit";
import afterRegister from "./main-shown";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    mainVis: afterRegister.reducer,
    user: userSlice.reducer,
  },
});

export default store;
