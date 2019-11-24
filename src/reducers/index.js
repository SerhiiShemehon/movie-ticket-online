import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { movieItemReducer } from "./movieItemReducer";
import { sessionItemReducer } from "./sessionItemReducer";

export const rootReducer = combineReducers({
  moviesReducer,
  movieItemReducer,
  sessionItemReducer
});