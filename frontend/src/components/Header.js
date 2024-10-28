import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <header
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 20px",
        textAlign: "center",
      }}
    >
      <h1>Forum</h1>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        {!user ? (
          <>
            <Link to="/signin" style={{ color: "white", marginRight: "15px" }}>
              Sign In
            </Link>
            <Link to="/signup" style={{ color: "white" }}>
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/create-forum"
              style={{ color: "white", marginRight: "15px" }}
            >
              Create Forum
            </Link>
            <button
              onClick={handleSignOut}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              Sign Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
