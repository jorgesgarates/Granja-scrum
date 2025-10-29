import MonitoreoAgua from "./MonitoreoAgua.jsx";
import InventarioPeces from "./InventarioPeces.jsx";
import Alimentacion from "./Alimentacion.jsx"; // 👈 nuevo componente PB-3

export default function App() {
  return (
    <>
      <h1 style={{ padding: 16 }}>Granja-scrum 🐟</h1>
      <MonitoreoAgua />
      <InventarioPeces />
      <Alimentacion /> {/* 👈 nuevo */}
    </>
  );
}
