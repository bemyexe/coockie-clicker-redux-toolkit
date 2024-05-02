import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { increment, reset } from "../store/slices/clickerSlice";

function App() {
  const count = useSelector((state) => state.clicker.value);
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

        <p>count is {count}</p>
        <p>
          <button onClick={() => dispatch(reset())}>RESET</button>
        </p>
      </div>
      <p className="read-the-docs">react-RTK-scss</p>
    </>
  );
}

export default App;
