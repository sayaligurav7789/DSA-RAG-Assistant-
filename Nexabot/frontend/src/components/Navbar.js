import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo">NexaBot</h2>

      <div>
        <button className="nav-btn" onClick={() => navigate("/login")}>
          Log in
        </button>

        <button className="nav-btn primary" onClick={() => navigate("/register")}>
          Sign up
        </button>
      </div>
    </nav>
  );
}