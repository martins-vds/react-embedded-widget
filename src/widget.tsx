import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./widget.css";

const container = document.createElement("div");
container.id = "widget";
document.body.appendChild(container);

createRoot(document.getElementById("widget")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
