import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { GtmProvider } from "./Provider/Gtmprovider";

// Hämta root-element
const rootElement = document.getElementById("root")!;

// Wrappa App med GtmProvider
createRoot(rootElement).render(
  <GtmProvider>
    <App />
  </GtmProvider>
);
