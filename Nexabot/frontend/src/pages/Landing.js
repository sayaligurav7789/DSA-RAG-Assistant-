import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      <Navbar />

      {/* HERO */}
      <section className="hero">
  <div className="hero-content">

    {/* Floating Robot */}
    <div className="floating-icon">🤖</div>

    {/* Badge */}
    <div className="badge">
      ● AI-Powered · Always On
    </div>

    {/* Heading */}
    <h1 className="hero-title">
      Chat Smarter <br />
      with <span className="gradient-text">AI That</span> <br />
      <span className="gradient-text2">Understands DSA</span>
    </h1>

    {/* Subtitle */}
    <p className="hero-subtitle">
      NexaBot delivers instant, intelligent conversations for your business.
      Automate support, engage users, and scale effortlessly.
    </p>

    {/* Buttons */}
    <div className="hero-buttons">
      <button
        className="primary-btn"
        onClick={() => navigate("/register")}
      >
        Get Started — It’s Free
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        I already have an account
      </button>
    </div>

  </div>
</section>

      {/* FEATURES */}
      <section className="features">
        <div className="card">
          ⚡
          <h3>Lightning Fast</h3>
          <p>Responses in milliseconds, 24/7 uptime guaranteed across all regions.</p>
        </div>

        <div className="card">
          🧠
          <h3>Truly Intelligent</h3>
          <p>Context-aware conversations powered by the latest large language models.</p>
        </div>

        <div className="card">
          🔒
          <h3>Secure by Design</h3>
          <p>End-to-end encryption and enterprise-grade data privacy built in</p>
        </div>

        <div className="card">
          🔗
          <h3>Easy Integration</h3>
          <p>Connect to any platform via REST API or our no-code embed widget.</p>
        </div>


      </section>

     <section className="how-section">

  <h2>How It Works</h2>
  <p className="how-subtitle">
    Our AI uses a Retrieval-Augmented Generation (RAG) approach to give you accurate,
    step-by-step solutions for Data Structures & Algorithms problems.
  </p>

  <div className="how-cards">

    <div className="how-card">
      <span>📝</span>
      <h3>Ask DSA Question</h3>
      <p>
        Enter any coding or DSA problem — from arrays to advanced algorithms.
      </p>
    </div>

    <div className="how-card">
      <span>📚</span>
      <h3>RAG Fetches Data</h3>
      <p>
        Our system retrieves relevant knowledge from curated datasets and past solutions.
      </p>
    </div>

    <div className="how-card">
      <span>🤖</span>
      <h3>AI Explains Solution</h3>
      <p>
        AI generates clear explanations, optimized code, and step-by-step logic.
      </p>
    </div>

  </div>

</section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Learning Smarter 🚀</h2>
        <button onClick={() => navigate("/register")}>
          Create Free Account
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 NexaBot • Built for Smart Learning</p>
      </footer>

    </div>
  );
}