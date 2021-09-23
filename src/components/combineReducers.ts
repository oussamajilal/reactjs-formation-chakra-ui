import { combineReducers } from "redux";
import profileReducer, { ProfileState } from "./Profile/reducer";

export interface RootState {
  profilePage: ProfileState;
}

export default combineReducers({
  profilePage: profileReducer,
});
