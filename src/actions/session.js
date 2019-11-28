import axios from "axios";

import {
  SESSION_LOADING,
  SESSION_DATA,
  SESSION_ERROR,
  URL_SESSION
} from "../constants";

const sessionLoading = () => ({
  type: SESSION_LOADING
});

const sessionData = (payload) => ({
  type: SESSION_DATA,
  payload
});

const sessionError = () => ({
  type: SESSION_ERROR
});

export const getSession = (id = false) => {
  const NEW_URL_SESSION = URL_SESSION + (!id ? '' : '?movie=' + id) ;
  return (dispatch) => {
    dispatch(sessionLoading());
    axios.get(NEW_URL_SESSION)
      .then(({ data }) => {
        dispatch(sessionData(data.session));
      })
      .catch((error) => {
        dispatch(sessionError());
      })
  };
}