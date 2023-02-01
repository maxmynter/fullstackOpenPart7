import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import notificationReducer from "./reducer/notificationReducer";
import blogPostReducer from "./reducer/blogPostReducer";
import loginReducer from "./reducer/loginReducer";
import userReducer from "./reducer/userReducer";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogPostReducer,
    user: loginReducer,
    allUsers: userReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
