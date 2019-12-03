import axios from "axios";

import {
  SPACE_LOADING,
  SPACE_DATA,
  SPACE_ERROR,
  URL_SPACE
} from "../constants";

const spaceLoading = () => ({
  type: SPACE_LOADING
});

const spaceData = (payload) => ({
  type: SPACE_DATA,
  payload
});

const spaceError = () => ({
  type: SPACE_ERROR
});

export const getSpace = () => {
  return (dispatch) => {
    dispatch(spaceLoading());
    axios.get(URL_SPACE)
      .then(({ data }) => {
        dispatch(spaceData(data.space));
      })
      .catch((error) => {
        dispatch(spaceError());
      })
  };
}