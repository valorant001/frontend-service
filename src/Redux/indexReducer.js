import { combineReducers } from "@reduxjs/toolkit";
import TabsActivateReducer from '../Redux/TabsChangeLinkAccount/TabsChangeRedux';
import AccessTokenReducer from '../Redux/AccessToken'
import PageDetailsReducer from '../Redux/PageDetails'
const rootReducer = combineReducers({
    tabsActivate: TabsActivateReducer,
    accessToken: AccessTokenReducer,
    pageDetails: PageDetailsReducer
});

export default rootReducer;