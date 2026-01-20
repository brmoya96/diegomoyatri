import Header from "../components/Header";

const results = [
  { year: "2026", title: "1° Lugar — Ironman 70.3 Pucón" },
  { year: "2025", title: "1° Lugar — Ironman 70.3 Valdivia" },
  { year: "2025", title: "13 del mundo — World Triathlon" },
  { year: "2024", title: "Juegos Olímpicos — París" },
  { year: "2020", title: "Juegos Olímpicos — Tokio" },
];

export default function ResultadosPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", color: "white" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Resultados</h1>
        <p style={{ opacity: 0.8 }}>Trayectoria competitiva e hitos principales.</p>

        <div style={{ marginTop: 28, display: "grid", gap: 14 }}>
          {results.map((r) => (
            <div
              key={r.year + r.title}
              style={{
                display: "flex",
                gap: 16,
                padding: 16,
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(0,0,0,.25)",
              }}
            >
              <div style={{ minWidth: 64, fontWeight: 800, opacity: 0.9 }}>{r.year}</div>
              <div style={{ fontWeight: 600, opacity: 0.9 }}>{r.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}