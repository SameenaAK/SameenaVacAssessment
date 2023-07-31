import { StrictMode } from "react"; //used to show problems
import { createRoot } from "react-dom/client"; //parent

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // to display content
  <StrictMode>
    <App />
  </StrictMode>
);
