import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    margin: "0 20px",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "bold" : "normal",
    color: "#0070f3",
    fontSize: "18px"
  });

  return (
    <nav style={{ textAlign: "center", padding: "20px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={linkStyle("/")}>Home</Link>
      <Link to="/topics" style={linkStyle("/topics")}>Topics</Link>
      <Link to="/help" style={linkStyle("/help")}>Help</Link>
    </nav>
  );
}
