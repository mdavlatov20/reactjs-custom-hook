import { useState } from "react";

function useCounter(intitalValue = 0) {
  const [count, setCount] = useState(intitalValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(intitalValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
