import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProSidebarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProSidebarProvider>
);
