import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subtractToCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn" onClick={subtractToCounter}>
        -
      </button>
      <input
        data-testid="input"
        type="number"
        value={inputValue}
        className="text-center"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
};

export default Counter;
