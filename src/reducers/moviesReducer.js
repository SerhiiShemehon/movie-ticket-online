import {
  MOVIES_DATA
} from "../constants";

const INITIAL_DATA = {
  movies: [],
};

export const moviesReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case MOVIES_DATA: {
      return {
        ...state,
        movies: action.payload
      };
    }
    default: {
      return state;
    }
  }
}