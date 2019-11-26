import axios from "axios";

import {
  MOVIES_LOADING,
  MOVIES_DATA,
  MOVIES_ERROR,
  URL_MOVIE
} from "../constants";

const moviesLoading = () => ({
  type: MOVIES_LOADING
});

const moviesData = (payload) => ({
  type: MOVIES_DATA,
  payload
});

const moviesError = () => ({
  type: MOVIES_ERROR
});

export const getMovies = () => {
  return (dispatch) => {
    dispatch(moviesLoading());
    axios.get(URL_MOVIE)
      .then(({ data }) => {
        dispatch(moviesData(data.movie));
      })
      .catch((error) => {
        dispatch(moviesError());
      })
  };
}