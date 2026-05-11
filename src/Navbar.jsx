import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "28px",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        Neurovixa
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <a href="/" style={linkStyle}>
          Home
        </a>

        <a href="/" style={linkStyle}>
          Tools
        </a>

        <a href="/" style={linkStyle}>
          About
        </a>

        <a href="/" style={linkStyle}>
          Contact
        </a>

        <button style={buttonStyle}>Get Started</button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

const buttonStyle = {
  background: "linear-gradient(135deg,#4F46E5,#06B6D4)",
  border: "none",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

export default Navbar;