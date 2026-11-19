"use client";
import { useState } from "react";

export default function LikeButton() {
  const [like, setLike] = useState<boolean>(false);

  const isLike = () => {
    setLike(true);
  };
  const disLike = () => {
    setLike(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={like ? disLike : isLike}
        type="button"
        className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-md border font-semibold transition-all duration-300 hover:shadow-lg active:scale-95
          ${
            like
              ? "text-red-500 border-red-300 bg-red-50"
              : "text-gray-700 border-gray-200 hover:bg-gray-50"
          }`}
      >
        <span className="text-xl">♥</span>
        <span>Like</span>
      </button>
    </div>
  );
}
