import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.clicker.value);
  return <p>count is {count}</p>;
};

export default Count;
