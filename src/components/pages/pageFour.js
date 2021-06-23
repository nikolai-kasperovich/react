import React, { useState } from "react";
import "../../slyles/pages.css";

const PageFour = () => {
  let [counter, setCounter] = useState(0);

  let increment = () => setCounter(counter + 1);
  let decrement = () => setCounter(counter - 1);

  return (
    <div>
      <div className="flexMid">
        <button className="btnAws" onClick={decrement}>
          Remove
        </button>
        <h3>Counter: {counter}</h3>
        <button className="btnAws" onClick={increment}>
          Add
        </button>
      </div>
    </div>
  );
};

export default PageFour;
