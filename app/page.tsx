"use client";
import { useState } from "react";

const options = [
  "Kiss 💋",
  "Hug 🤗",
  "Compliment ❤️",
  "Flirty Look 😘",
  "Confess 💌",
  "Sing 🎶",
  "Dance 💃",
  "Truth 💭",
  "Hold Hands 🫶",
  "Dare 🔥",
  "back shot 💦",
  "you owe me head 🍆",
  "doggy style shot 🤤🍑🥒❤️‍🔥",
  "explicit sending photo 🤤",
  "Sweet Whisper 🗣️",
  "Love Note ✍️",
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * options.length);
    setTimeout(() => {
      setSelected(options[randomIndex]);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pink-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">💞 Couple Spinner 💞</h1>
      <button
        onClick={spin}
        disabled={spinning}
        className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-600 transition"
      >
        {spinning ? "Spinning..." : "Spin 🎡"}
      </button>
      {selected && !spinning && (
        <p className="text-2xl mt-6 animate-bounce">You got: {selected}</p>
      )}
    </div>
  );
}
