import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: 0,
  
};

const TabsActivateSlicer = createSlice({
  name: "Tabs Change in Linked Account Page",
  initialState,
  reducers: {
    setActivateTab: (state, action) => {
      state.tabs = action.payload.tabs;
    },
    cleartabs: (state) => {
      state.tabs = 0;
    },
  },
});

export const { setActivateTab, cleartabs } = TabsActivateSlicer.actions;
export default TabsActivateSlicer.reducer;
