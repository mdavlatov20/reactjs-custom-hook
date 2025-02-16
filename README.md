# **React.js-da Custom Hooklar**

Custom Hook – bu React Hooklarining kuchini qayta ishlatish uchun yozilgan maxsus funksiya. Agar komponent ichida bir xil kodni bir necha joyda ishlatishga to‘g‘ri kelsa, uni custom hook sifatida ajratish mumkin.

**Nega Custom Hook kerak?**

- Kodni qayta ishlatish – Bir xil logikani har bir komponentda yozmaslik uchun.
- Kod tozaligi va tartibliligi – Komponentlar faqat UI haqida qayg‘urishi uchun.
- Bo‘linma va modullilik – Biror logikani alohida funksiya sifatida ajratish.

`useCounter`

```jsx
import { useState } from "react";

function useCounter(intitalValue = 0) {
  const [count, setCount] = useState(intitalValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(intitalValue);

  return { count, increment, decrement, reset };
}

export default useCounter;


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

```
