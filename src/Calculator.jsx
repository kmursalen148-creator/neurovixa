import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");

  const press = (btn) => {
    if (btn === "AC") return setValue("");
    if (btn === "⌫") return setValue(value.slice(0, -1));
    if (btn === "=") {
      try {
        setValue(eval(value.replace("×", "*").replace("÷", "/")).toString());
      } catch {
        setValue("Error");
      }
      return;
    }
    setValue(value + btn);
  };

  const buttons = [
    "AC", "⌫", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
  ];

  return (
    <div className="min-h-screen bg-[#070B1A] text-white flex items-center justify-center p-6">
      <div className="absolute w-72 h-72 bg-purple-600 blur-[120px] opacity-30"></div>

      <div className="relative w-full max-w-sm bg-white/10 border border-white/10 rounded-[35px] p-6 backdrop-blur-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
          Calculator
        </h1>

        <div className="bg-[#111827] rounded-3xl p-5 mb-6 text-right min-h-[95px] flex items-end justify-end">
          <span className="text-4xl font-bold break-all">
            {value || "0"}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => press(btn)}
              className={`
                h-16 rounded-2xl text-xl font-bold transition
                ${
                  btn === "="
                    ? "col-span-2 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                    : ["AC", "⌫", "%", "÷", "×", "-", "+"].includes(btn)
                    ? "bg-purple-600/80 hover:bg-purple-700"
                    : "bg-[#1f2937] hover:bg-[#374151]"
                }
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}