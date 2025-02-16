import React from "react";
import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl mb-4">{count}</h2>
      <div className="flex items-center gap-4">
        <button className="btn bg-red-600" onClick={decrement}>
          -
        </button>
        <button className="btn bg-neutral-800" onClick={reset}>
          reset
        </button>
        <button className="btn bg-green-900" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
