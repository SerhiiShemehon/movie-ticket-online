import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from "history";

import { rootReducer } from "./reducers";

export const history = createBrowserHistory();

export const store = createStore(rootReducer, applyMiddleware(thunk));

