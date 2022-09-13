import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  console.log("here");
  return (
    <div className="App">
      <h1>{score}</h1>
      <h2>{bestScore}</h2>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        Click Me!
      </button>
      <button
        onClick={() => {
          setBestScore(score);
          setScore(0);
        }}
      >
        Best Score
      </button>
    </div>
  );
}

export default App;
