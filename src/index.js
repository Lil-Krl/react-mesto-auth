import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
      <React.StrictMode>
    <App />
  </React.StrictMode>

  </HashRouter>
);