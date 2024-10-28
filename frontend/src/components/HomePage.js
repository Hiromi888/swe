import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function HomePage({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
    </>
  );
}

export default HomePage;
