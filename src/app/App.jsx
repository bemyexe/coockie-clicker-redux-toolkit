import { useDispatch } from "react-redux";
import "./style.scss";
import { increment, reset } from "../store/slices/clickerSlice";
import Count from "./count";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1> Coockie Clicker Redux Toolkit</h1>
      <div className="card">
        <img
          className="svg"
          src="assets/cookie.svg"
          onClick={() => dispatch(increment())}
        />
        <Count />
        <p>
          <button onClick={() => dispatch(reset())}>RESET</button>
        </p>
      </div>
      <p className="read-the-docs">react-RTK-scss</p>
    </>
  );
}

export default App;
