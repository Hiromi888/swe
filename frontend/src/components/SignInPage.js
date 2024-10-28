import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function SignInPage({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (username && password) {
      // Implement your authentication logic here
      navigate("/");
    } else {
      alert("Please fill in both fields!");
    }
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
          <h1>Sign In</h1>
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
            style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
          />
          <button
            type="button"
            onClick={handleSignIn}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
