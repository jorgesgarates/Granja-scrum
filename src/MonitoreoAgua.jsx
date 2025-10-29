import { useEffect, useState } from "react";

export default function MonitoreoAgua() {
  const [datos, setDatos] = useState({ ph: 7.2, oxigeno: 6.5, temp: 24.0 });

  // simula cambios en los valores cada 3 segundos
  useEffect(() => {
    const id = setInterval(() => {
      setDatos(d => ({
        ph: +(d.ph + (Math.random() - 0.5) * 0.1).toFixed(2),
        oxigeno: +(d.oxigeno + (Math.random() - 0.5) * 0.2).toFixed(2),
        temp: +(d.temp + (Math.random() - 0.5) * 0.3).toFixed(2),
      }));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ padding: 16 }}>
      <h2>PB-1 — Monitoreo de Agua (simulado)</h2>
      <ul>
        <li>pH: <strong>{datos.ph}</strong></li>
        <li>Oxígeno disuelto (mg/L): <strong>{datos.oxigeno}</strong></li>
        <li>Temperatura (°C): <strong>{datos.temp}</strong></li>
      </ul>
      <small>Datos se actualizan cada 3 segundos (mock).</small>
    </section>
  );
}
