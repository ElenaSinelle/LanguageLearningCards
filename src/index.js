import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./commonStyles/index.module.scss";
import App from "./App";
import Tracker from "@openreplay/tracker";

const tracker = new Tracker({
  projectKey: "I7qni2iDORi17F7iJhWT",
});
tracker.start();
tracker.setUserID("Elena");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
