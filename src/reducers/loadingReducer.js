import {
  MOVIES_LOADING,
  MOVIES_DATA,
  MOVIES_ERROR
} from "../constants";

const INITIAL_DATA = {
  isLoading: false
};

export const loadingReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case MOVIES_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case MOVIES_DATA: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case MOVIES_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
      
  }
}