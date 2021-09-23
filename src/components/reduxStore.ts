import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./combineReducers";

const initalState = {};

const store = createStore(rootReducer, initalState, composeWithDevTools());

export default store;
