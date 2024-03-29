import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";
import store from "./store";
import { getAccessUser } from "./utils/localstorage.js";
import { fetchMe } from "./store/authSlice.js";

if (getAccessUser()) {
  store.dispatch(fetchMe());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  <InjectTailwind>
    <Provider store={store}>
      <App />
    </Provider>
  </InjectTailwind>
  //   </React.StrictMode>
);
