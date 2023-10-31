import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import store from "./store";
// import { persistStore } from "redux-persist";
import router from "./router";
import { RouterProvider } from "react-router-dom";

// export let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  // </Provider>,
);
