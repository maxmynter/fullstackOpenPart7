import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import notificationReducer from "./reducers/notificationReducer";
import anecdoteEntryReducer from "./reducers/blogEntryReducer";

const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    anecdotes: anecdoteEntryReducer,
  },
});

export default store;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
