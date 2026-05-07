import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import "../styles.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <FaCode className="nav-logo-icon" />
        <span>NexaBot</span>
      </div>

      <div className="nav-actions">
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
