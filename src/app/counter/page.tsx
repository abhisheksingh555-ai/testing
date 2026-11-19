
"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const add = () => {
    setCounter((prev) => prev + 1);
  };

  const sub = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-950 to-purple-950 p-6">

      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-lg">

        <h1 className="mb-8 text-3xl font-bold text-white">
          Counter App
        </h1>

        <div className="mb-8 flex h-36 items-center justify-center rounded-2xl bg-white/10 shadow-inner">
          <h2 className="text-6xl font-extrabold tabular-nums text-white">
            {counter}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={add}
            className="rounded-xl bg-emerald-500 py-3 font-bold text-white shadow-lg transition duration-200 hover:bg-emerald-600 active:scale-95"
          >
            + Add
          </button>

          <button
            onClick={sub}
            className="rounded-xl bg-rose-500 py-3 font-bold text-white shadow-lg transition duration-200 hover:bg-rose-600 active:scale-95"
          >
            - Subtract
          </button>

        </div>

        <button
          onClick={reset}
          className="mt-4 w-full rounded-xl border border-white/20 bg-white/10 py-3 font-semibold text-white transition duration-200 hover:bg-white/20 active:scale-95"
        >
          Reset
        </button>

      </div>
    </div>
  );
}
