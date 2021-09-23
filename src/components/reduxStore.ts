import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./combineReducers";
import createSagaMiddleware from "redux-saga";
import fetchProfileSaga from "./Profile/sagas";

const initalState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(fetchProfileSaga);

export default store;
