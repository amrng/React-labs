import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TokenContextProvider from "./context/Token.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TokenContextProvider>
      <App />
    </TokenContextProvider>
  </React.StrictMode>
);

reportWebVitals();
