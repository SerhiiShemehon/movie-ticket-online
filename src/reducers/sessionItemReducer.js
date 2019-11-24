import {
  GET_SESSION_ITEM_PEDING,
  GET_SESSION_ITEM_RESOLVED,
  GET_SESSION_ITEM_REJECTED
} from "../constants";

const INITIAL_DATA = {
  isLoading: false,
  session: [],
  isError: false
};

export const sessionItemReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_SESSION_ITEM_PEDING: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case GET_SESSION_ITEM_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        session: action.payload
      };
    }

    case GET_SESSION_ITEM_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        session: []
      };
    }

    default:
      return state;
  }
}