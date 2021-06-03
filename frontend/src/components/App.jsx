import React, { useState } from "react";
import axios from "axios";
import "../css/App.css";

const App = () => {
  const [text, setText] = useState("");

  const getData = async () => {
    axios
      .get("http://localhost:4000", { crossdomain: true })
      .then((response) => setText(response.data));
  };

  const postData = async () => {
    axios
      .post("http://localhost:4000/getPost", {
        title: "This is a post request from frontend",
      })
      .then(() => console.log("Posted to backend"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="app">
      <h1>{text}</h1>
      <button onClick={getData}>Click Me</button>
      <button onClick={postData}>Click Me To Post Data</button>
    </div>
  );
};

export default App;
