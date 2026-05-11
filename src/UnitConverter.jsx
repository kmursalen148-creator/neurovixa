import { useState } from "react";
import Navbar from "./Navbar";

export default function UnitConverter() {
  const [km, setKm] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    if (!km) return setResult("Please enter value");

    const miles = (km * 0.621371).toFixed(2);
    setResult(`${km} KM = ${miles} Miles`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#070B1A] text-white px-6 py-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Unit Converter</h1>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 max-w-xl">
          <input
            type="number"
            placeholder="Enter kilometers"
            value={km}
            onChange={(e) => setKm(e.target.value)}
            className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 mb-5 outline-none"
          />

          <button
            onClick={convert}
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold"
          >
            Convert
          </button>

          {result && <div className="mt-6 bg-[#111827] p-5 rounded-2xl">{result}</div>}
        </div>
      </div>
    </>
  );
}