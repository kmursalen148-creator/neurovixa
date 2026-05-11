// PasswordGenerator.jsx

import { useState } from "react";

export default function PasswordGenerator() {

  const [password, setPassword] = useState("");

  const generatePassword = () => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    let pass = "";

    for (let i = 0; i < 12; i++) {

      pass += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );

    }

    setPassword(pass);
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-white/10 rounded-[30px] p-10 backdrop-blur-xl border border-white/10">

        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-10">
          Password Generator
        </h1>

        <button
          onClick={generatePassword}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-2xl text-lg font-bold"
        >
          Generate Password
        </button>

        {password && (

          <div className="mt-8 bg-[#111827] p-6 rounded-2xl text-center break-all">

            <h2 className="text-2xl font-bold text-purple-400">
              {password}
            </h2>

          </div>

        )}

      </div>

    </div>
  );
}