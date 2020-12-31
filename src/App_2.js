import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const options = {
    title: "title",
    message: "message"
  };
  function handleIncr() {
    setCount(count + 1);
  }
  function handleDr() {
    console.log(!count);
    if (count <= 0) {
      alert("i m alert");
      return;
    }
    setCount(count - 1);
  }
  return (
    <div>
      <h1>You are in world no {count} !</h1>
      <button onClick={handleIncr}>increment</button>
      <button onClick={handleDr} disabled={count === -1 && handleDr}>
        Decrement
      </button>
    </div>
  );
}
