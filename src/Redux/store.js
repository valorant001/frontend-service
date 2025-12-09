import { configureStore } from "@reduxjs/toolkit";
import TabsActivateReducer from '../Redux/TabsChangeLinkAccount/TabsChangeRedux';

export const store = configureStore({
  reducer: {
    tabsActivate: TabsActivateReducer,
  },
});
