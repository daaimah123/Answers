import React, { useState } from 'react';
import './App.css'; 

const Counter = () => {
 const [count, setCount] = useState(0);

 const incrementCounter = () => {
    setCount(count + 1);
    // setCount(prevCount => prevCount + 1)
 };

 const decrementCounter = () => {
    setCount(count - 1);
     // setCount(prevCount => prevCount - 1)
 };

 const resetCounter = () => {
    setCount(1);
 };

 return (
    <div className="counter-container">
      <p>Counter: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
 );
};

export default Counter;
