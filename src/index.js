import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as data from "./data.json";

ReactDOM.render(
  <div style={{ backgroundColor: "#cccccc", padding: "10px", margin: "0" }}>
    <App style={{ marginTop: "10px" }} data={data.default} />
  </div>,
  document.getElementById("root")
);
