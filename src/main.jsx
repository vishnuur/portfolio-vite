import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import "regenerator-runtime";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
