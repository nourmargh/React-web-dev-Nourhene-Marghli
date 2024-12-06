import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes";

// Utiliser ReactDOM.render pour les versions antérieures à React 18
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routeTree} />
  </React.StrictMode>,
  document.getElementById("root")
);
