// BMICalculator.jsx

import { useState } from "react";

export default function BMICalculator() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {

    const result =
      weight / ((height / 100) * (height / 100));

    setBmi(result.toFixed(1));
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl rounded-[30px] p-10 border border-white/10">

        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-10">
          BMI Calculator
        </h1>

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-4 rounded-2xl bg-[#111827] text-white mb-5"
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-4 rounded-2xl bg-[#111827] text-white"
        />

        <button
          onClick={calculateBMI}
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-2xl text-lg font-bold"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-8 bg-[#111827] rounded-2xl p-8 text-center">

            <h2 className="text-3xl font-bold text-purple-400">
              BMI: {bmi}
            </h2>

          </div>
        )}

      </div>

    </div>
  );
}