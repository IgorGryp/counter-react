import { useState } from "react";
import "./index.css";
import { FaPlus, FaMinus, FaRedoAlt } from "react-icons/fa";

function App() {
  let [count, setCount] = useState(0);

  const onClickMinus = () => {
    setCount(count - 1);
  };
  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickClear = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <div className="counter">
          <button className="minus" onClick={onClickMinus}>
            <FaMinus />
          </button>
          <h2>{count}</h2>
          <button className="plus" onClick={onClickPlus}>
            <FaPlus />
          </button>
        </div>
        <button className="reset" onClick={onClickClear}>
          <FaRedoAlt />
        </button>
      </div>
    </div>
  );
}

export default App;
