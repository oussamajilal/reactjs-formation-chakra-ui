import { call, put, takeLatest } from "redux-saga/effects";
import { Client } from "../Client/Client";
import queries from "../queries";
import {
  PROFILE_FETCH_ERROR,
  PROFILE_FETCH_LOADING,
  PROFILE_FETCH_SUCCESS,
} from "./reducer";

export const PROFILE_FETCH_REQUESTED = "PROFILE_FETCH_REQUESTED";

function* fetchProfile() {
  yield put({ type: PROFILE_FETCH_LOADING });
  try {
    const data: Client = yield call(queries.fetchProfile);
    yield put({ type: PROFILE_FETCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: PROFILE_FETCH_ERROR, payload: error });
  }
}
function* fetchProfileSaga() {
  yield takeLatest(PROFILE_FETCH_REQUESTED, fetchProfile);
}

export default fetchProfileSaga;
