import { configureStore } from "@reduxjs/toolkit";
import  userDetailSlice  from "../Features/userDetails";

export const store = configureStore({
  reducer: {
    app: userDetailSlice,
  },
});
