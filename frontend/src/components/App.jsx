import React, { useState } from "react";
import axios from "axios";
import "../css/App.css";

const App = () => {
  const getData = () => {
    axios
      .get("http://localhost:4000", { crossdomain: true })
      .then((response) => setText(response.data));
  };

  const [text, setText] = useState("");

  return (
    <div className="app">
      <h1>{text}</h1>
      <button onClick={getData}>Click Me</button>
    </div>
  );
};

export default App;
