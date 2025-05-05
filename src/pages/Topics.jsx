import { Link } from "react-router-dom";

const topics = [
  "Basic Electrical Principles",
  "Simple Circuits",
  "Measuring Instruments",
  "Resistors and Ohm’s Law",
  "Power and Energy",
  "Electrical Symbols and Diagrams",
  "Conductors and Insulators",
  "Series and Parallel Circuits",
  "Magnetism and Electromagnetism",
  "Electrical Measuring Units",
  "Basic Electrical Tools",
  "AC vs DC Current",
  "Simple Electrical Machines",
  "Electrical Safety Procedures"
];

export default function Topics() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>N1 Electrical Topics</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {topics.map((topic, index) => (
          <li key={index} style={{ margin: "12px 0" }}>
            <Link to={`/simulations/${index}`} style={{ fontSize: "18px", textDecoration: "none", color: "#0070f3" }}>
              {index + 1}. {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}