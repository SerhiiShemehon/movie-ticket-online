import axios from "axios";

import {
  NEWS_LOADING,
  NEWS_DATA,
  NEWS_ERROR,
  URL_NEWS
} from "../constants";

const getNewsLoading = () => ({
  type: NEWS_LOADING
});

const getNewsData = (payload) => ({
  type: NEWS_DATA,
  payload
});

const getNewsError = () => ({
  type: NEWS_ERROR
});

export const getNews = () => {
  return (dispatch) => {
    dispatch(getNewsLoading());
    axios.get(URL_NEWS)
      .then(({ data }) => {
        dispatch(getNewsData(data));
      })
      .catch(( error ) => {
        dispatch(getNewsError());
      })
  };
}