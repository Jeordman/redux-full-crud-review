import { createStore, applyMiddleware, combineReducers } from "redux";

import promiseMiddleware from "redux-promise-middleware";
import carReducer from "./carReducer";

const rootReducer = combineReducers({
  carReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(promiseMiddleware)
  )
);
