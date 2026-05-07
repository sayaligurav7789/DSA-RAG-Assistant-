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

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Email Register
  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      alert("Account Created Successfully 🚀");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // Google Signup
  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  // GitHub Signup
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

      <h1>Create Account</h1>
      <p className="subtitle">
        Start your free journey with NexaBot today.
      </p>

      <form onSubmit={handleRegister} className="auth-form">

        {/* First + Last Name */}
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

        {/* Email */}
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="alex@company.com"
          onChange={handleChange}
          required
        />

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Min. 8 characters"
          onChange={handleChange}
          required
        />

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat password"
          onChange={handleChange}
          required
        />

        {/* Checkbox */}
        <label className="checkbox">
          <input type="checkbox" required />
          <span>
            I agree to the <span className="link">Terms of Service</span> and{" "}
            <span className="link">Privacy Policy</span>
          </span>
        </label>

        {/* Button */}
        <button className="primary-btn full">
          Create My Account →
        </button>
      </form>

      {/* Divider */}
      <div className="divider">
        <span>or sign up with</span>
      </div>

      {/* Social */}
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

      {/* Switch */}
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