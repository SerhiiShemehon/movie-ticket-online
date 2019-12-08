import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";
import { sessionReducer } from "./sessionReducer";
import { roomReducer } from "./roomReducer";

export const rootReducer = combineReducers({
  moviesReducer,
  loadingReducer,
  errorReducer,
  sessionReducer,
  roomReducer
});