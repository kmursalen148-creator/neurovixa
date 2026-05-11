import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import AgeCalculator from "./AgeCalculator";
import BMICalculator from "./BMICalculator";
import ImageToPDF from "./ImageToPDF";
import CVMaker from "./CVMaker";
import QRCodeGenerator from "./QRCodeGenerator";
import WordCounter from "./WordCounter";
import TextToSpeech from "./TextToSpeech";
import PasswordGenerator from "./PasswordGenerator";
import Calculator from "./Calculator";
import UnitConverter from "./UnitConverter";

function Home() {

  const tools = [
    { name: "CV Maker", path: "/cv-maker", icon: "📄" },
    { name: "Image To PDF", path: "/image-to-pdf", icon: "🖼️" },
    { name: "Age Calculator", path: "/age-calculator", icon: "🎂" },
    { name: "BMI Calculator", path: "/bmi-calculator", icon: "⚖️" },
    { name: "QR Code Generator", path: "/qr-generator", icon: "🔳" },
    { name: "Word Counter", path: "/word-counter", icon: "📝" },
    { name: "Text To Speech", path: "/text-to-speech", icon: "🔊" },
    { name: "Password Generator", path: "/password-generator", icon: "🔐" },
    { name: "Calculator", path: "/calculator", icon: "🧮" },
    { name: "Unit Converter", path: "/unit-converter", icon: "📏" },
  ];

  return (

    <div className="min-h-screen bg-[#070B1A] text-white overflow-hidden">

      <Navbar />

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 blur-[120px] opacity-30"></div>

      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600 blur-[140px] opacity-25"></div>

      <section className="relative z-10 px-6 md:px-12 py-20 text-center">

        <div className="inline-block mb-5 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-purple-300">
          100% FREE ONLINE TOOLS
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Powerful Free Tools <br />

          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            In One Place
          </span>

        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Premium online tools website with calculators, PDF tools, CV Maker and more.
        </p>

      </section>

      <section className="relative z-10 px-6 md:px-12 pb-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {tools.map((tool) => (

            <div
              key={tool.name}
              className="bg-white/10 border border-white/10 p-6 rounded-3xl backdrop-blur-xl hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 mb-5 flex items-center justify-center text-2xl">
                {tool.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {tool.name}
              </h3>

              <Link to={tool.path}>

                <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl w-full">
                  Open Tool
                </button>

              </Link>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cv-maker" element={<CVMaker />} />

        <Route path="/image-to-pdf" element={<ImageToPDF />} />

        <Route path="/age-calculator" element={<AgeCalculator />} />

        <Route path="/bmi-calculator" element={<BMICalculator />} />

        <Route path="/qr-generator" element={<QRCodeGenerator />} />

        <Route path="/word-counter" element={<WordCounter />} />

        <Route path="/text-to-speech" element={<TextToSpeech />} />

        <Route path="/password-generator" element={<PasswordGenerator />} />

        <Route path="/calculator" element={<Calculator />} />

        <Route path="/unit-converter" element={<UnitConverter />} />

      </Routes>

    </BrowserRouter>

  );
}