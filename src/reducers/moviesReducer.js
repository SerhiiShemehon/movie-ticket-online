import {
  GET_MOVIES_PEDING,
  GET_MOVIES_RESOLVED,
  GET_MOVIES_REJECTED
} from "../constants";

const INITIAL_DATA = {
  isLoading: false,
  movies: [],
  isError: false
};

export const moviesReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_MOVIES_PEDING: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case GET_MOVIES_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      };
    }

    case GET_MOVIES_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        movies: []
      };
    }

    default:
      return state;
  }
}