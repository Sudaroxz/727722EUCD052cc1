import React, { useState } from 'react';
import './App.css'; 
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter-container"> {/* Add the CSS class to the container */}
      <p className="counter-display">Count: {count}</p>
      <button className="counter-button" onClick={handleIncrement}>Increment</button>
    </div>
  );
};
export default Counter;
