import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const onClickeCountUp = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickeCountUp}>カウントアップ</button>
    </div>
  );
}
