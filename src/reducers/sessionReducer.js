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
      action.payload.sort((a,b)=>{
        if (new Date(a.date) > new Date(b.date)){
          return 1;
        } else if (new Date(a.date) < new Date(b.date)){
          return -1;
        } else {
          return 0;
        }
      });
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