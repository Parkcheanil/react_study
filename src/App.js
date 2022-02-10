import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = { color: "blue", fontSize: "30px" };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={posts}>개발 Blog</div>
      </div>
      <h4> 블로그내 글 </h4>
    </div>
  );
}

export default App;
