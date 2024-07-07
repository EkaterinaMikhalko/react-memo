import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LightModeProvider } from "./contexts/lightMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LightModeProvider>
      <RouterProvider router={router}></RouterProvider>
    </LightModeProvider>
  </React.StrictMode>,
);
