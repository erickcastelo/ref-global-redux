import { createSlice } from "@reduxjs/toolkit";

const refsSlice = createSlice({
  name: "refs",
  initialState: {},
  reducers: {
    setRef: (state: any, action: any) => {
      const { key, ref } = action.payload;
      state[key] = ref;
    },
  },
});

export const { setRef } = refsSlice.actions;

export default refsSlice.reducer;
