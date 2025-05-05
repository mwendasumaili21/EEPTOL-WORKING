import React from "react";
import AppRoutes from "./routes";
import NavBar from "./components/NavBar";
import './index.css';

export default function App() {
  return (
    <div className="w-full h-full bg-gray-50">
      <NavBar />
      <AppRoutes />
    </div>
  );
}
