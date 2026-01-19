import Header from "../components/Header";

export default function CoachingPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", color: "white" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Coaching</h1>
        <p style={{ opacity: 0.8 }}>Planes y acompañamiento.</p>

        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {[
            { name: "Base", items: ["Plan mensual", "Objetivo por bloque", "Feedback semanal"] },
            { name: "Pro", items: ["Revisión de métricas", "Ajustes por fatiga", "Feedback 2–3 veces/semana"] },
            { name: "1:1 Premium", items: ["Optimización por disciplina", "Estrategia de carrera", "Soporte cercano"] },
          ].map((p) => (
            <div key={p.name} style={{ padding: 18, borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", background: "rgba(0,0,0,.25)" }}>
              <div style={{ fontWeight: 900, fontSize: 18 }}>{p.name}</div>
              <ul style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.8 }}>
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}