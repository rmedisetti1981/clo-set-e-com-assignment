import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { initializeStateFromUrl } from "./initFromUrl";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*sync Redux state with URL
Initialize the store state before rendering*/
initializeStateFromUrl(store);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
