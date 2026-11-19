"use client";

import { useState } from "react";

export default function Password() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordShow = () => {
    setShowPassword(true);
  };

  const passwordHide = () => {
    setShowPassword(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-indigo-950 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          Create Password
        </h2>

        <p className="mb-6 text-sm text-gray-500">Enter your password below.</p>

        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-4 transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full bg-transparent py-3 text-gray-800 outline-none placeholder:text-gray-400"
          />

          <button
            onClick={showPassword ? passwordHide : passwordShow}
            type="button"
            className="ml-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg transition duration-200 hover:bg-indigo-700 hover:shadow-indigo-200 active:scale-95">
          Submit
        </button>
      </div>
    </div>
  );
}
