"use client";

export default function Button() {
  return (
    <button
      className="bg-red-500 cursor-pointer rounded-sm px-4 py-1"
      onClick={() => console.log("button was clicked")}
    >
      visit
    </button>
  );
}
