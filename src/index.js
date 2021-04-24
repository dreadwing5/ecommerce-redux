import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StylesProvider } from "@material-ui/core/styles";
// import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
