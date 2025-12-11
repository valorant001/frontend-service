import { combineReducers } from "@reduxjs/toolkit";
import TabsActivateReducer from '../Redux/TabsChangeLinkAccount/TabsChangeRedux';
import AccessTokenReducer from '../Redux/AccessToken'
const rootReducer = combineReducers({
   tabsActivate: TabsActivateReducer,
    accessToken: AccessTokenReducer
});

export default rootReducer;