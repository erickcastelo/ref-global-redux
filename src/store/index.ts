import { configureStore } from "@reduxjs/toolkit";
import refsReducer from "./refsSlice";

export const store = configureStore({
  reducer: {
    refs: refsReducer,
  },
});
