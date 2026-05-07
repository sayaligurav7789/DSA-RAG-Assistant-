import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaBolt,
  FaBrain,
  FaShieldAlt,
  FaPlug,
  FaPencilAlt,
  FaDatabase,
  FaMagic,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import "../styles.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <div className="floating-icon">
            <FaRobot />
          </div>

          <div className="badge">
            <span className="badge-dot" />
            AI-Powered · Always On
          </div>

          <h1 className="hero-title">
            Chat Smarter <br />
            with <span className="gradient-text">AI That</span> <br />
            <span className="gradient-text2">Understands DSA</span>
          </h1>

          <p className="hero-subtitle">
            NexaBot delivers instant, intelligent answers for Data Structures &amp;
            Algorithms — powered by RAG and a curated textbook knowledge base.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/register")}>
              Get Started — It's Free <FaArrowRight size={13} style={{ marginLeft: 8 }} />
            </button>
            <button className="secondary-btn" onClick={() => navigate("/login")}>
              I already have an account
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="card">
          <div className="card-icon"><FaBolt /></div>
          <h3>Lightning Fast</h3>
          <p>Responses in milliseconds, 24/7 uptime guaranteed across all regions.</p>
        </div>

        <div className="card">
          <div className="card-icon"><FaBrain /></div>
          <h3>Truly Intelligent</h3>
          <p>Context-aware conversations powered by the latest large language models.</p>
        </div>

        <div className="card">
          <div className="card-icon"><FaShieldAlt /></div>
          <h3>Secure by Design</h3>
          <p>End-to-end encryption and enterprise-grade data privacy built in.</p>
        </div>

        <div className="card">
          <div className="card-icon"><FaPlug /></div>
          <h3>Easy Integration</h3>
          <p>Connect to any platform via REST API or our no-code embed widget.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="section-label">How It Works</div>
        <h2>Three Steps to Mastery</h2>
        <p className="how-subtitle">
          Our AI uses a Retrieval-Augmented Generation (RAG) approach to give you accurate,
          step-by-step solutions for Data Structures &amp; Algorithms problems.
        </p>

        <div className="how-cards">
          <div className="how-card">
            <div className="how-step">01</div>
            <div className="how-icon"><FaPencilAlt /></div>
            <h3>Ask DSA Question</h3>
            <p>Enter any coding or DSA problem — from arrays to advanced algorithms.</p>
          </div>

          <div className="how-card">
            <div className="how-step">02</div>
            <div className="how-icon"><FaDatabase /></div>
            <h3>RAG Fetches Data</h3>
            <p>Our system retrieves relevant knowledge from curated datasets and past solutions.</p>
          </div>

          <div className="how-card">
            <div className="how-step">03</div>
            <div className="how-icon"><FaMagic /></div>
            <h3>AI Explains Solution</h3>
            <p>AI generates clear explanations, optimized code, and step-by-step logic.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-icon"><FaRocket /></div>
        <h2>Start Learning Smarter</h2>
        <p>Join learners who are already acing DSA interviews with NexaBot.</p>
        <button className="primary-btn cta-btn" onClick={() => navigate("/register")}>
          Create Free Account <FaArrowRight size={13} style={{ marginLeft: 8 }} />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 NexaBot · Built for Smart Learning</p>
      </footer>
    </div>
  );
}
