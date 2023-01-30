import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import notificationReducer from "./reducer/notificationReducer";
import blogPostReducer from "./reducer/blogPostReducer";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogPostReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
