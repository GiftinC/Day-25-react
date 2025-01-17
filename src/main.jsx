import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Pages/Context.jsx";
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
      <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
  