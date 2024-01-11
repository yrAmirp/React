import { useState } from "react";
import './Counter.css';
import { CounterChild } from "./CounterChild";
export const Counter = () => {
  let value = 0;
  return (
    <div>
      <button onClick={() => {
        
      }}>
        get value
      </button>
      <CounterChild value={value} />
    </div>
  );
};



