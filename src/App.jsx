import React, { useState } from 'react';
import './App.css'; // You can define your CSS styles in App.css

function App() {
  // State to manage the counter value
  const [counter, setCounter] = useState(0);

  // Function to handle incrementing the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to handle decrementing the counter
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  // Function to handle resetting the counter to 0
  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="container">
      <div className="App">
        <h1>Counter App</h1>
        <div id="counter" className="counter">{counter}</div>
        <div className="buttons">
          <button className="btn" onClick={incrementCounter}>Increase</button>
          <button className="btn" onClick={decrementCounter}>Decrease</button>
          <button className="btn" onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
