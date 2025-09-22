import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./providers/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
