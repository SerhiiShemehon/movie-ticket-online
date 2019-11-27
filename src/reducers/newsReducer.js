import {
  NEWS_LOADING,
  NEWS_DATA,
  NEWS_ERROR
} from "../constants";

const INITIAL_DATA = {
  news: [],
  isLoadingNews: false,
  isErrorNews: false
};

export const newsReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case NEWS_LOADING: {
      return {
        ...state,
        isErrorNews: false,
        isLoadingNews: true,
      };
    }
    case NEWS_DATA: {
      return {
        ...state,
        isErrorNews: false,
        isLoadingNews: false,
        news: action.payload
      };
    }
    case NEWS_ERROR: {
      return {
        ...state,
        isErrorNews: true,
        isLoadingNews: false,
      };
    }
    default: {
      return state;
    }

  }
}
