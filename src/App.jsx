import React from "react";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div style={{ padding: "50px", textAlign: "center", fontSize: "24px" }}>
      ✅ EEPTOL is loading routes...
      <AppRoutes />
    </div>
  );
}
