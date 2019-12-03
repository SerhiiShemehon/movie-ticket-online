import {
  SPACE_SHADOW_LOADING,
  SPACE_SHADOW_DATA,
  SPACE_SHADOW_ERROR
} from "../constants";

const INITIAL_DATA = {
  isLoadingSpaceShadow: false,
  isErrorSpaceShadow: false,
  spaceShadowData: []
};

export const spaceShadowReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case SPACE_SHADOW_LOADING: {
      return {
        ...state,
        isErrorSpaceShadow: false,
        isLoadingSpaceShadow: true
      };
    }
    case SPACE_SHADOW_DATA: {
      return {
        ...state,
        isLoadingSpaceShadow: false,
        isErrorSpaceShadow: false,
        spaceShadowData: action.payload
      };
    }
    case SPACE_SHADOW_ERROR: {
      return {
        ...state,
        isLoadingSpaceShadow: false,
        isErrorSpaceShadow: true,
      };
    }
    default: {
      return state;
    }

  }
}