import React, { useState } from "react";
import { Link } from "react-router-dom";

function Test1() {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(prevCount => prevCount + 1)
    }
     const Decrement = () => {
       setCount((prevCount) => prevCount - 1);
     };

  return (
    <>
      <div className="Test1-page">
        <h1>
          Increment and Decrement Using <u>useState</u>
        </h1>
        <div className="plus-minus-box">
          <button onClick={Decrement}>-</button>
          <span>{count}</span>
          <button onClick={Increment}>+</button>
              </div>
              <Link to="/Test2">Go to Test2 page</Link>
      </div>
    </>
  );
}
export default Test1;
