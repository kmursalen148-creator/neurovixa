import React from "react";

import Navbar from "./Navbar";

import Calculator from "./Calculator";
import AgeCalculator from "./AgeCalculator";
import BMICalculator from "./BMICalculator";
import PasswordGenerator from "./PasswordGenerator";
import WordCounter from "./WordCounter";
import UnitConverter from "./UnitConverter";
import ImageToPDF from "./ImageToPDF";
import CVMaker from "./CVMaker";

function App() {
  return (
    <div
      style={{
        background: "#070B1A",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px",
            background: "linear-gradient(90deg,#4F46E5,#06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Neurovixa
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Free Premium Online Tools Website with modern UI and powerful utilities.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          padding: "30px",
        }}
      >
        <Calculator />

        <AgeCalculator />

        <BMICalculator />

        <PasswordGenerator />

        <WordCounter />

        <UnitConverter />

        <ImageToPDF />

        <CVMaker />
      </div>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          marginTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "#94a3b8",
        }}
      >
        © 2026 Neurovixa — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;