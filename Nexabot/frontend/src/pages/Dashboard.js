import React, { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    window.location.href = "/dsa";
  }, []);

  return (
    <div style={{ background: "#000010", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
      <p>Redirecting to DSA Assistant...</p>
    </div>
  );
}
