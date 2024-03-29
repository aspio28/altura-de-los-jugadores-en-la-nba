import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

import { PlayerProvider, TeamProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayerProvider>
      <TeamProvider>
        <App />
      </TeamProvider>
    </PlayerProvider>
  </React.StrictMode>
);
