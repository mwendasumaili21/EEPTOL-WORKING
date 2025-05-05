import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes";

console.log("✅ App.jsx loaded");

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>🔍 App is rendering</h1>
      <NavBar />
      <AppRoutes />
    </div>
  );
}
