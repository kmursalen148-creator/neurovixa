import { useState } from "react";

export default function CVMaker() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070B1A",
        padding: "40px",
        color: "white",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "40px",
          background: "linear-gradient(to right,#9333ea,#2563eb)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
        }}
      >
        Premium CV Maker
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >

        {/* LEFT FORM */}

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "30px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >

          <h2 style={{ marginBottom: "20px" }}>
            Fill Your Information
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />

          <textarea
            rows="4"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            style={inputStyle}
          />

          <textarea
            rows="4"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            style={inputStyle}
          />

          <textarea
            rows="4"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => window.print()}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "16px",
              border: "none",
              borderRadius: "16px",
              background:
                "linear-gradient(to right,#9333ea,#2563eb)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Download CV
          </button>

        </div>

        {/* RIGHT CV */}

        <div
          style={{
            background: "white",
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(0,0,0,0.4)",
          }}
        >

          {/* TOP */}

          <div
            style={{
              background:
                "linear-gradient(to right,#9333ea,#2563eb)",
              padding: "40px",
              color: "white",
              textAlign: "center",
            }}
          >

            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "white",
                margin: "auto",
                marginBottom: "20px",
              }}
            ></div>

            <h1 style={{ fontSize: "40px" }}>
              {name || "Your Name"}
            </h1>

            <p style={{ marginTop: "10px" }}>
              {email || "your@email.com"}
            </p>

            <p>{phone || "+92 3000000000"}</p>

          </div>

          {/* CONTENT */}

          <div
            style={{
              padding: "40px",
              color: "#111",
            }}
          >

            <Section
              title="Skills"
              content={skills || "Write your skills here"}
            />

            <Section
              title="Education"
              content={education || "Write your education here"}
            />

            <Section
              title="Experience"
              content={experience || "Write your experience here"}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function Section({ title, content }) {
  return (
    <div style={{ marginBottom: "35px" }}>

      <h2
        style={{
          color: "#2563eb",
          marginBottom: "10px",
          fontSize: "26px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          color: "#444",
        }}
      >
        {content}
      </p>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "16px",
  border: "none",
  background: "#111827",
  color: "white",
  fontSize: "16px",
};