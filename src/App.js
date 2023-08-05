import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValueArray, setInputValueArray] = useState([]);

  console.log(inputValue);

  const handleSubmit = () => {
    setInputValueArray((prev) => [...prev, inputValue]);
  };
  return (
    <div className="App">
      <h1>To do List</h1>
      <label>To do Task</label>
      <input
        placeholder="Write a todo here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Submit</button>

      <div>
        {inputValueArray?.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
