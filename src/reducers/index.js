import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";
import { sessionReducer } from "./sessionReducer";
import { roomReducer } from "./roomReducer";
import { spaceReducer } from "./spaceReducer";
import { spaceShadowReducer } from './spaceShadowReducer';

export const rootReducer = combineReducers({
  moviesReducer,
  loadingReducer,
  errorReducer,
  sessionReducer,
  roomReducer,
  spaceReducer,
  spaceShadowReducer
});