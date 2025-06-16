import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { GtmProvider } from "./Provider/Gtmprovider";

// Hämta root-element
const rootElement = document.getElementById("root")!;

console.log("🌍 import.meta.env:", import.meta.env);

// Wrappa App med GtmProvider
createRoot(rootElement).render(
  <GtmProvider>
    <App />
  </GtmProvider>
);
