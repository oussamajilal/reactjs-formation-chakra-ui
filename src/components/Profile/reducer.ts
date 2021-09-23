import { Action } from "redux";
import { Client } from "../Client/Client";

export const PROFILE_FETCH_SUCCESS = "PROFILE_FETCH_SUCCESS";
export const PROFILE_FETCH_ERROR = "PROFILE_FETCH_ERROR";

export interface ProfileState {
  profile: Client | null;
  isLoading: boolean;
  error: Error | null;
}

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

interface ProfileAction extends Action {
  payload: any;
}

const profileReducer = (state = initialState, action: ProfileAction) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case PROFILE_FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
