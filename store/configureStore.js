import { createStore, combineReducers } from "redux";
import { favouriteReducer } from "../src/redux/reducers/favouriteReducer";
import { profileReducer } from "../src/redux/reducers/profileReducer";
import { settingReducer } from "../src/redux/reducers/settingReducer";
import { rootStateReducer } from "../src/redux/reducers/rootStateReducer";

export const rootReducer = combineReducers({
  profile: profileReducer,
  settings: settingReducer,

  favourite: favouriteReducer,
  rootState: rootStateReducer,
});
