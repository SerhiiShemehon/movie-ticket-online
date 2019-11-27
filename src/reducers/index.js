import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";
import { newsReducer } from "./newsReducer";

export const rootReducer = combineReducers({
  moviesReducer,
  loadingReducer,
  errorReducer,
  newsReducer
});