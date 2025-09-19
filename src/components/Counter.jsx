import React, { useReducer } from "react";
import countReducer from "../reducers/CountReducer";

const Counter = () => {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <h1>My Counter</h1>
      <p>You´ve clicked Me {count} times</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
        disabled={count === 0 ? true : false}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
