import { Action } from "redux";

const PROFILE_FETCH_SUCCESS = "PROFILE_FETCH_SUCCESS";
const PROFILE_FETCH_ERROR = "PROFILE_FETCH_ERROR";

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
