import {
  SPACE_LOADING,
  SPACE_DATA,
  SPACE_ERROR
} from "../constants";

const INITIAL_DATA = {
  isLoadingSpace: false,
  isErrorSpace: false,
  spaceData: []
};

export const spaceReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case SPACE_LOADING: {
      return {
        ...state,
        isErrorSpace: false,
        isLoadingSpace: true
      };
    }
    case SPACE_DATA: {
      return {
        ...state,
        isLoadingSpace: false,
        isErrorSpace: false,
        spaceData: action.payload
      };
    }
    case SPACE_ERROR: {
      return {
        ...state,
        isLoadingSpace: false,
        isErrorSpace: true,
      };
    }
    default: {
      return state;
    }

  }
}