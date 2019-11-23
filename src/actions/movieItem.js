import axios from "axios";

import {
  GET_MOVIE_ITEM_PEDING,
  GET_MOVIE_ITEM_RESOLVED,
  GET_MOVIE_ITEM_REJECTED,
  URL_MOVIE
} from "../constants";

const getMoviesPeding = () => ({
  type: GET_MOVIE_ITEM_PEDING
});

const getMoviesResolved = (payload) => ({
  type: GET_MOVIE_ITEM_RESOLVED,
  payload
});

const getMoviesRejected = () => ({
  type: GET_MOVIE_ITEM_REJECTED
});

export const getMovieItem = (id) => {
  return (dispatch) => {
    dispatch(getMoviesPeding());
    axios.get(URL_MOVIE + '?_id=' + id)
      .then(({ data }) => {
        dispatch(getMoviesResolved(data.movie[0]));
      })
      .catch(( error ) => {
        dispatch(getMoviesRejected());
      })
  };
}