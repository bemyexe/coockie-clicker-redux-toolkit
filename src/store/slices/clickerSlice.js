import { createSlice } from "@reduxjs/toolkit";

const clickerSlice = createSlice({
  name: "clicker",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, reset } = clickerSlice.actions;

export default clickerSlice.reducer;
