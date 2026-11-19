
"use client";

import { useState } from "react";

export default function Page() {
  const [counter, setCounter] = useState<number>(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const sub = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button
        onClick={add}
        className="bg-amber-500 p-2 m-4"
      >
        Add
      </button>

      <button
        onClick={sub}
        className="bg-fuchsia-400 p-2 m-4"
      >
        Sub
      </button>
    </>
  );
}
