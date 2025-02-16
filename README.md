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

---

## **useToggle Hook**

`useToggle – Custom Hook`

```jsx
import { useState } from "react";

function useToggle(toggleArg = false) {
  const [toggle, setToggle] = useState(toggleArg); // State yaratish

  const changeToggle = () => setToggle((prev) => !prev); // Toggle funksiyasi

  return { toggle, changeToggle }; // Qiymat va funksiyani qaytarish
}

export default useToggle;
```

- `useState` yordamida `toggle` nomli state yaratadi. Dastlabki qiymati `toggleArg` (standart false).
- `changeToggle` funksiyasi state-ni oldingi `(prev)` qiymatining teskari holatiga `(true yoki false)` o‘zgartiradi.
- Hook `{ toggle, changeToggle }` obyektini qaytaradi, bu esa komponent ichida ishlatiladi.

```jsx
import React from "react";
import useToggle from "../hooks/useToggle"; // Custom hookni import qilish

export default function ToggleContent() {
  const { toggle, changeToggle } = useToggle(false); // Hookni chaqirish

  return (
    <div className="p-20">
      <button className="btn bg-blue-800" onClick={changeToggle}>
        {toggle ? "Hide" : "Show"}
      </button>
      {toggle ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sapiente corrupti recusandae magni, neque commodi sint, autem vel,
          porro et dicta omnis deserunt laudantium aperiam odio velit?
          Veritatis, nostrum dignissimos.
        </p>
      ) : null}
    </div>
  );
}
```

- `useToggle(false)` ni chaqirib, `toggle` va `changeToggle` o‘zgaruvchilarini oladi.
- Tugma bosilganda `changeToggle` chaqiriladi va `toggle` qiymati `true/false` ga o‘zgaradi.
- Agar `toggle === true` bo‘lsa, `<p>` elementi ko‘rinadi, aks holda yo‘qoladi.
