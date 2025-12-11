import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessCode: "",
  connectedState:""
};

const SaveAccessSlicer = createSlice({
  name: "Save the Access Token",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessCode = action.payload.accessCode;
      state.connectedState = action.payload.connectedState;
    },
    clearAccessToken: (state) => {
      state.accessCode = "";
      state.connectedState = "";
    },
  },
});

export const { setAccessToken, clearAccessToken } = SaveAccessSlicer.actions;
export default SaveAccessSlicer.reducer;
