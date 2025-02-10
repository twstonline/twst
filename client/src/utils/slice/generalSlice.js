import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "generalSlice",
  initialState: {
    openNav: false,
  },
  reducers: {
    openMobileNav: (state) => {
      state.openNav = !state.openNav;
    },
  },
});

export const { openMobileNav } = generalSlice.actions;
export default generalSlice.reducer;
