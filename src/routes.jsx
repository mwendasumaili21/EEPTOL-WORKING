import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Simulations from "./pages/Simulations";
import Help from "./pages/Help";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/simulations/:topicId" element={<Simulations />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}