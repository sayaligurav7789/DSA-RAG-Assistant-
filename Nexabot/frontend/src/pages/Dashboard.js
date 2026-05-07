import React from "react";
import Navbar from "../components/Navbar";   // ✅ correct import

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px", color: "white" }}>
        <h1>Welcome to Dashboard 🚀</h1>
        <p>Your DSA RAG Assistant will be here.</p>
      </div>
    </div>
  );
}