import { configureStore } from "@reduxjs/toolkit";
import clickerSlice from "./slices/clickerSlice";

export default configureStore({
  reducer: {
    clicker: clickerSlice,
  },
});
