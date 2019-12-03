import axios from "axios";

import {
  SPACE_SHADOW_LOADING,
  SPACE_SHADOW_DATA,
  SPACE_SHADOW_ERROR,
  URL_SPACE_SHADOW
} from "../constants";

const spaceShadowLoading = () => ({
  type: SPACE_SHADOW_LOADING
});

const spaceShadowData = (payload) => ({
  type: SPACE_SHADOW_DATA,
  payload
});

const spaceShadowError = () => ({
  type: SPACE_SHADOW_ERROR
});

export const getSpaceShadow = (id = false) => {
  const NEW_URL_SPACE_SHADOW = URL_SPACE_SHADOW + (!id ? '' : '?session=' + id);
  return (dispatch) => {
    dispatch(spaceShadowLoading());
    axios.get(NEW_URL_SPACE_SHADOW)
      .then(({ data }) => {
        dispatch(spaceShadowData(data.space));
      })
      .catch((error) => {
        dispatch(spaceShadowError());
      })
  };
}