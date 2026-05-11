// AgeCalculator.jsx

import { useState } from "react";

export default function AgeCalculator() {

  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {

    const birthDate = new Date(dob);

    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birthDate.getDate())
    ) {
      years--;
    }

    setAge(years);
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl rounded-[30px] p-10 border border-white/10">

        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-10">
          Age Calculator
        </h1>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-4 rounded-2xl bg-[#111827] text-white"
        />

        <button
          onClick={calculateAge}
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-2xl text-lg font-bold"
        >
          Calculate Age
        </button>

        {age && (
          <div className="mt-8 bg-[#111827] rounded-2xl p-8 text-center">

            <h2 className="text-3xl font-bold text-purple-400">
              {age} Years Old
            </h2>

          </div>
        )}

      </div>

    </div>
  );
}