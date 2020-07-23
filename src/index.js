import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./Redux/index";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import 'bootstrap/dist/css/bootstrap.css';
let store = createStore(rootReducer, applyMiddleware(thunk));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
