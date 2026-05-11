import { useState } from "react";
import Navbar from "./Navbar";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#070B1A] text-white px-6 py-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Word Counter</h1>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 max-w-3xl">
          <textarea
            placeholder="Write or paste text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-56 bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none"
          />

          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="bg-[#111827] p-6 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-purple-400">{words}</h2>
              <p className="text-gray-400 mt-2">Words</p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-purple-400">{characters}</h2>
              <p className="text-gray-400 mt-2">Characters</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}