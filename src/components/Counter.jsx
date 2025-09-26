import React, { useEffect, useReducer, useRef, useState } from "react";
import countReducer from "../reducers/CountReducer";

const Counter = () => {
  // const [count, setCount] = useState(0);

  const counterRef = useRef(0);
  const inputRef = useRef(null);
  const [count, dispatch] = useReducer(countReducer, 0);

  function handleClick() {
    counterRef.current += 1;
    console.log("Ref count:", counterRef.current);
  }

  return (
    <div className="flex flex-col items-center ">
      <h1>My Counter</h1>
      <p>You´ve clicked Me {count} times</p>
      <p>Render ID: {Math.random()}</p>
      <input ref={inputRef} type="text" className="border m-2" />
      <div className="flex gap-x-3">
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
          className="rounded bg-green-300 p-3 cursor-pointer"
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
          disabled={count === 0 ? true : false}
          className="rounded bg-red-300 p-3 cursor-pointer"
        >
          -1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
          className="rounded bg-gray-300 p-3 cursor-pointer"
        >
          Reset
        </button>
        <button onClick={handleClick} className="rounded bg-orange-300 p-3">
          Increment ref
        </button>

        {counterRef.current}
      </div>
    </div>
  );
};

export default Counter;
