import React from "react";
import AppRoutes from "./routes";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <AppRoutes />
    </div>
  );
}
