import axios from "axios";

import {
  GET_MOVIES_PEDING,
  GET_MOVIES_RESOLVED,
  GET_MOVIES_REJECTED,
  URL_MOVIE
} from "../constants";

const getBannerMoviesPeding = () => ({
  type: GET_MOVIES_PEDING
});

const getBannerMoviesResolved = (payload) => ({
  type: GET_MOVIES_RESOLVED,
  payload
});

const getBannerMoviesRejected = () => ({
  type: GET_MOVIES_REJECTED,
  payload: 'Something wrong!'
});

export const getBannerMovies = () => {
  return (dispatch) => {
    dispatch(getBannerMoviesPeding());
    axios.get(URL_MOVIE)
      .then(({ data }) => {
        dispatch(getBannerMoviesResolved(data.movie));
      })
      .catch((error) => {
        dispatch(getBannerMoviesRejected());
      })
  };
}