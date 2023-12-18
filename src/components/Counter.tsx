import { useState } from "react";
import './Counter.scss';
import './Counter.css';
export const Counter = () => {

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount((count) => count + 1)
        setCount((count) => count + 1)
      }}>
        Increment
      </button>
    </div>
  );
};
