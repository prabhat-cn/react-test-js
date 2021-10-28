import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div data-test="component-counter" className="counter-app">
      <h1 data-test="title-header">Click Counter</h1>
      <h1 data-test="counter-display">
        Counted Value &nbsp; <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
      &nbsp; &nbsp; &nbsp;
      <button data-test="decrement-button" onClick={decrement}>
        Decrement Counter
      </button>
    </div>
  );
};
