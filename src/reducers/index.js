import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";
import { sessionReducer } from "./sessionReducer";

export const rootReducer = combineReducers({
  moviesReducer,
  loadingReducer,
  errorReducer,
  sessionReducer
});