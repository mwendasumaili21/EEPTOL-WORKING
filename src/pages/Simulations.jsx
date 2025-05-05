import { useParams } from "react-router-dom";

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

export default function Simulations() {
  const { topicId } = useParams();
  const topicIndex = parseInt(topicId, 10);
  const topicName = topics[topicIndex];

  if (!topicName) {
    return (
      <div style={{ textAlign: "center", paddingTop: "60px" }}>
        <h2>Topic not found ❌</h2>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "60px" }}>
      <h1>Simulation: {topicName}</h1>
      <p>🧪 Practical simulation interface coming soon!</p>
    </div>
  );
}
