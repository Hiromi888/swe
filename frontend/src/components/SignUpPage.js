import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function SignUpPage({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!username || !password || !userId || !dob) {
      alert("Please fill in all fields!");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
          />
          <button
            type="button"
            onClick={handleSignUp}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
