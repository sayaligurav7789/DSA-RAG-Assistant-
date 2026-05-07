import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import "../styles.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveUserAndRedirect = (user, overrideName) => {
    const name = overrideName || user.displayName || user.email?.split("@")[0] || "User";
    localStorage.setItem("nexabot_user", name);
    window.location.href = "/dsa";
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const fullName = [form.firstName, form.lastName].filter(Boolean).join(" ");
      saveUserAndRedirect(result.user, fullName);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      saveUserAndRedirect(result.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      saveUserAndRedirect(result.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
  <div className="auth-container">
    <div className="auth-card modern">

      <h1>Create Account</h1>
      <p className="subtitle">
        Start your free journey with NexaBot today.
      </p>

      <form onSubmit={handleRegister} className="auth-form">

        <div className="row">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Alex"
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Johnson"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="alex@company.com"
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Min. 8 characters"
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat password"
          onChange={handleChange}
          required
        />

        <label className="checkbox">
          <input type="checkbox" required />
          <span>
            I agree to the <span className="link">Terms of Service</span> and{" "}
            <span className="link">Privacy Policy</span>
          </span>
        </label>

        <button className="primary-btn full">
          Create My Account →
        </button>
      </form>

      <div className="divider">
        <span>or sign up with</span>
      </div>

      <div className="social-buttons modern">
        <button onClick={handleGoogle}>
          <FcGoogle size={18} />
          <span>Google</span>
        </button>

        <button onClick={handleGithub}>
          <FaGithub size={18} />
          <span>GitHub</span>
        </button>
      </div>

      <p className="switch">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>
          Log in here
        </span>
      </p>

    </div>
  </div>
);
}
