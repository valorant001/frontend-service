import { configureStore } from "@reduxjs/toolkit";
import TabsActivateReducer from '../Redux/TabsChangeLinkAccount/TabsChangeRedux';
import AccessTokenReducer from '../Redux/AccessToken'
export const store = configureStore({
  reducer: {
    tabsActivate: TabsActivateReducer,
    accessToken: AccessTokenReducer
  },
});
