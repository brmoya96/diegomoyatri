import Header from "../components/Header";

export default function PresentacionPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", color: "white" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Presentación</h1>
        <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
          Triatleta olímpico, Ironman & 70.3. Biografía, performance, resultados y propuesta para marcas.
        </p>

        <div style={{ marginTop: 28, display: "grid", gap: 16 }}>
          <div style={{ padding: 18, border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, background: "rgba(0,0,0,.25)" }}>
            <strong>Resumen</strong>
            <div style={{ marginTop: 8, opacity: 0.8 }}>
              Diego Moya. Contenido y activaciones con foco en alto rendimiento y audiencia deportiva.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}