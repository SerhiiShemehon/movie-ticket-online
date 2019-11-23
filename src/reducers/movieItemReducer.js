import {
  GET_MOVIE_ITEM_PEDING,
  GET_MOVIE_ITEM_RESOLVED,
  GET_MOVIE_ITEM_REJECTED
} from "../constants";

const INITIAL_DATA = {
  isLoading: false,
  movie: [],
  isError: false
};

export const movieItemReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_MOVIE_ITEM_PEDING: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case GET_MOVIE_ITEM_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        movie: action.payload
      };
    }

    case GET_MOVIE_ITEM_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        movie: []
      };
    }

    default:
      return state;
  }
}