import { createRoot } from "react-dom/client";
import DataProvider from "./Context/dataContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
