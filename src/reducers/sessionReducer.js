import {
  SESSION_LOADING,
  SESSION_DATA,
  SESSION_ERROR
} from "../constants";

const INITIAL_DATA = {
  isLoadingSession: false,
  isErrorSession: false,
  sessionData: []
};

export const sessionReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case SESSION_LOADING: {
      return {
        ...state,
        isErrorSession: false,
        isLoadingSession: true
      };
    }
    case SESSION_DATA: {
      return {
        ...state,
        isLoadingSession: false,
        isErrorSession: false,
        sessionData: action.payload
      };
    }
    case SESSION_ERROR: {
      return {
        ...state,
        isLoadingSession: false,
        isErrorSession: true,
      };
    }
    default: {
      return state;
    }

  }
}