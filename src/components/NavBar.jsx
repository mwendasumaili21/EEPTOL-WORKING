import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{
      background: "#004080",
      padding: "15px 20px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>EEPTOL</h2>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/topics" style={{ color: "white", textDecoration: "none" }}>Topics</Link>
        <Link to="/help" style={{ color: "white", textDecoration: "none" }}>Help</Link>
      </div>
    </nav>
  );
}
