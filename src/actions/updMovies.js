import {
  MOVIES_DATA
} from "../constants";

const moviesData = (payload) => ({
  type: MOVIES_DATA,
  payload
});

export const updMovies = (data) => {
  return (dispatch) => {
    dispatch(moviesData(data));
  };
}