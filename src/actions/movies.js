import axios from "axios";

import {
  GET_MOVIES_PEDING,
  GET_MOVIES_RESOLVED,
  GET_MOVIES_REJECTED,
  URL_MOVIE
} from "../constants";

const getMoviesPeding = () => ({
  type: GET_MOVIES_PEDING
});

const getMoviesResolved = (payload) => ({
  type: GET_MOVIES_RESOLVED,
  payload
});

const getMoviesRejected = () => ({
  type: GET_MOVIES_REJECTED,
  payload: 'Something wrong!'
});

export const getMovies = () => {
  return (dispatch) => {
    dispatch(getMoviesPeding());
    axios.get(URL_MOVIE)
      .then(({ data }) => {
        dispatch(getMoviesResolved(data.movie));
      })
      .catch((error) => {
        dispatch(getMoviesRejected());
      })
  };
}