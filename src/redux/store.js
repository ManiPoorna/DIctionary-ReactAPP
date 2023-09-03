import React from "react";
import { createStore,applyMiddleware } from "redux";
import searchReducer from "./reducers/searchReducer";
import thunk from "redux-thunk";

const store = createStore(searchReducer,applyMiddleware(thunk));

export default store