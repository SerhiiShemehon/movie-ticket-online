import { combineReducers } from "redux";

import { toggleMenuReducer } from "./toggleMenuReducer";
import { bannerMoviesReducer } from "./bannerMoviesReducer";

export const rootReducer = combineReducers({
  toggleMenuReducer,
  bannerMoviesReducer
});