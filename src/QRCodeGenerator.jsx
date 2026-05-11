import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {

  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-[#070B1A] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-white/10 rounded-[30px] p-10 backdrop-blur-xl border border-white/10 text-center">

        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-8">
          QR Code Generator
        </h1>

        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 rounded-2xl bg-[#111827] text-white mb-8"
        />

        <div className="bg-white p-6 rounded-2xl flex justify-center">

          <QRCodeCanvas
            value={text || "https://neurovixa.com"}
            size={220}
          />

        </div>

      </div>

    </div>
  );
}