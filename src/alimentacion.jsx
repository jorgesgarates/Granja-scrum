import { useState } from "react";

export default function Alimentacion() {
  const [hora, setHora] = useState("");
  const [racion, setRacion] = useState(""); // gramos
  const [programacion, setProgramacion] = useState([]);

  const agregar = (e) => {
    e.preventDefault();
    if (!hora || !racion) return;
    setProgramacion((prev) => [...prev, { hora, racion: Number(racion) }]);
    setHora("");
    setRacion("");
  };

  const eliminar = (i) => {
    setProgramacion((prev) => prev.filter((_, idx) => idx !== i));
  };

  return (
    <section style={{ padding: 16 }}>
      <h2>PB-3 — Alimentación Automática</h2>

      <form onSubmit={agregar} style={{ marginBottom: 12 }}>
        <label style={{ marginRight: 8 }}>
          Hora:
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </label>
        <label style={{ marginRight: 8 }}>
          Ración (g):
          <input
            type="number"
            min="0"
            value={racion}
            onChange={(e) => setRacion(e.target.value)}
            style={{ marginLeft: 8, width: 100 }}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>

      <table border="1" cellPadding="6">
        <thead>
          <tr><th>Hora</th><th>Ración (g)</th><th></th></tr>
        </thead>
        <tbody>
          {programacion.length === 0 && (
            <tr><td colSpan="3">Sin horarios programados.</td></tr>
          )}
          {programacion.map((p, i) => (
            <tr key={i}>
              <td>{p.hora}</td>
              <td>{p.racion}</td>
              <td><button onClick={() => eliminar(i)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <small>
        *Evidencia de avance de PB-3 (UI + estado). Integración con hardware se simulará más adelante.
      </small>
    </section>
  );
}
