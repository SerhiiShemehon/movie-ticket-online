import {
  ROOM_LOADING,
  ROOM_DATA,
  ROOM_ERROR
} from "../constants";

const INITIAL_DATA = {
  isLoadingRoom: false,
  isErrorRoom: false,
  roomData: []
};

export const roomReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ROOM_LOADING: {
      return {
        ...state,
        isErrorRoom: false,
        isLoadingRoom: true
      };
    }
    case ROOM_DATA: {
      return {
        ...state,
        isLoadingRoom: false,
        isErrorRoom: false,
        roomData: action.payload
      };
    }
    case ROOM_ERROR: {
      return {
        ...state,
        isLoadingRoom: false,
        isErrorRoom: true,
      };
    }
    default: {
      return state;
    }
  }
}