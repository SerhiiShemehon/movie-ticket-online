import axios from "axios";

import {
  GET_SESSION_ITEM_PEDING,
  GET_SESSION_ITEM_RESOLVED,
  GET_SESSION_ITEM_REJECTED,
  URL_SESSION
} from "../constants";

const getSessionPeding = () => ({
  type: GET_SESSION_ITEM_PEDING
});

const getSessionResolved = (payload) => ({
  type: GET_SESSION_ITEM_RESOLVED,
  payload
});

const getSessionRejected = () => ({
  type: GET_SESSION_ITEM_REJECTED
});

export const getSessionItem = (id) => {
  return (dispatch) => {
    dispatch(getSessionPeding());
    axios.get(URL_SESSION + '?movie=' + id)
      .then(({ data }) => {
        dispatch(getSessionResolved(data.session));
      })
      .catch(( error ) => {
        dispatch(getSessionRejected());
      })
  };
}