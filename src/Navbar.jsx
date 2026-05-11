import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          background:
            "linear-gradient(to right,#9333ea,#2563eb)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Neurovixa
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >

        <Link style={linkStyle} to="/">
          Home
        </Link>

        <Link style={linkStyle} to="/cv-maker">
          CV Maker
        </Link>

        <Link style={linkStyle} to="/image-to-pdf">
          Image To PDF
        </Link>

        <Link style={linkStyle} to="/calculator">
          Calculator
        </Link>

        <Link style={linkStyle} to="/bmi-calculator">
          BMI
        </Link>

      </div>

    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: "600",
};