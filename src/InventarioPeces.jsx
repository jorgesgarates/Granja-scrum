import { useState } from "react";

export default function InventarioPeces() {
  const [estanque, setEstanque] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [inventario, setInventario] = useState([]);

  const agregar = (e) => {
    e.preventDefault();
    if (!estanque || !cantidad) return;
    setInventario(prev => [...prev, { estanque, cantidad: Number(cantidad) }]);
    setEstanque("");
    setCantidad("");
  };

  return (
    <section style={{ padding: 16 }}>
      <h2>PB-2 — Inventario de Peces</h2>

      <form onSubmit={agregar} style={{ marginBottom: 12 }}>
        <input
          placeholder="Estanque"
          value={estanque}
          onChange={e => setEstanque(e.target.value)}
        />
        <input
          placeholder="Cantidad"
          type="number"
          value={cantidad}
          onChange={e => setCantidad(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <table border="1" cellPadding="6">
        <thead>
          <tr><th>Estanque</th><th>Cantidad</th></tr>
        </thead>
        <tbody>
          {inventario.map((r, i) => (
            <tr key={i}><td>{r.estanque}</td><td>{r.cantidad}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
