import "@babel/polyfill";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import Dashboard from "./containers/Dashboard";
import configureStore from "./configureStore";

const initialState = {};
const store = configureStore(initialState);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Dashboard path="/" />
      </Router>
    </Provider>
  );
}
