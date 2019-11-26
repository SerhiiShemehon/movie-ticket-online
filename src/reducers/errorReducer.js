import {
  MOVIES_LOADING,
  MOVIES_DATA,
  MOVIES_ERROR
} from "../constants";

const INITIAL_DATA = {
  isError: false
};

export const errorReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case MOVIES_LOADING: {
      return {
        ...state,
        isError: false,
      };
    }
    case MOVIES_DATA: {
      return {
        ...state,
        isError: false,
      };
    }
    case MOVIES_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    default: {
      return state;
    }

  }
}