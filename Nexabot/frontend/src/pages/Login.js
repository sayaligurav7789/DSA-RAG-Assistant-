import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase";
import "../styles.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔐 Email Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // 🔵 Google Login
  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  // ⚫ GitHub Login
  const handleGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card modern">

        <h1>Welcome Back</h1>
        <p className="subtitle">Log in to your NexaBot dashboard.</p>

        <form onSubmit={handleLogin} className="auth-form">

          {/* EMAIL */}
          <label>Email Address</label>
          <input
            type="email"
            placeholder="alex@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="forgot">Forgot password?</p>

          <button type="submit" className="primary-btn full">
            Log In to NexaBot →
          </button>
        </form>

        {/* DIVIDER */}
        <div className="divider">
          <span>or continue with</span>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="social-buttons modern">
          <button onClick={handleGoogle}>
            <FcGoogle size={20} />
            <span>Google</span>
          </button>

          <button onClick={handleGithub}>
            <FaGithub size={20} />
            <span>GitHub</span>
          </button>
        </div>

        {/* SWITCH */}
        <p className="link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Sign up for free
          </span>
        </p>

      </div>
    </div>
  );
}