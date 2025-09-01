import React from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "../index";

// If you prefer to add your own global styles in addition to Tailwind CDN,
// create a styles.css file and import it here:
// import "./styles.css"

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
