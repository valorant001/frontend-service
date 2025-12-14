import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [],
  refresh : false
};

const PageDetailsSlicer = createSlice({
  name: "Save the Page Details to Redux Store",
  initialState,
  reducers: {
    setPageDetails: (state, action) => {
      state.pages = action.payload.pages;
      state.refresh = action.payload.refresh;
    },
    clearPageDetails: (state) => {
      state.pages = [];
    },
  },
});

export const { setPageDetails, clearPageDetails } = PageDetailsSlicer.actions;
export default PageDetailsSlicer.reducer;