import { Link } from "react-router-dom";

export default function Navbar() {

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
        flexWrap: "wrap",
      }}
    >

      <Link
        to="/"
        style={{
          textDecoration: "none",
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

      </Link>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >

        <Link style={linkStyle} to="/">
          Home
        </Link>

        <Link style={linkStyle} to="/about">
          About
        </Link>

        <Link style={linkStyle} to="/contact">
          Contact
        </Link>

        <Link style={linkStyle} to="/privacy-policy">
          Privacy
        </Link>

        <Link style={linkStyle} to="/terms">
          Terms
        </Link>

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