import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { movieItemReducer } from "./movieItemReducer";

export const rootReducer = combineReducers({
  moviesReducer,
  movieItemReducer
});