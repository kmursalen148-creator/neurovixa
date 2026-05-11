import { useState } from "react";
import Navbar from "./Navbar";

export default function TextToSpeech() {
  const [text, setText] = useState("");

  const speakText = () => {
    if (!text) return alert("Please write text first");

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#070B1A] text-white px-6 py-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Text To Speech</h1>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 max-w-3xl">
          <textarea
            placeholder="Write text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-56 bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none"
          />

          <button
            onClick={speakText}
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold"
          >
            Speak Text
          </button>
        </div>
      </div>
    </>
  );
}