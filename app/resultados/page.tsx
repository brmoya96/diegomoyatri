"use client";
// app/resultados/page.tsx
import Header from "../components/Header";

const records = [
  {
    title: "Ironman 70.3 Pucón 2026",
    lines: ["1° Lugar Elite", "Record histórico 3:42:07, primer chileno hace 33 años"],
  },
  {
    title: "Ironman 70.3 Valdivia 2025",
    lines: ["1° Lugar Elite", "Record del circuito"],
  },
  {
    title: "World Triathlon Championship Series",
    lines: ["13° del mundo"],
  },
   {
    title: "Campeón Panamericano Elite",
    lines: ["Calima 2025"],
  },
  {
    title: "JJOO Paris 2024",
    lines: ["28° Lugar, mejor resultado chileno"],
  },
];

const resultsByYear: Array<{
  year: string;
  items: Array<string>;
}> = [
  {
    year: "2026",
    items: [
      "Pos 1 Elite — Ironman 70.3 Pucón",
    ],
  },
  {
    year: "2025",
    items: [
      "Pos 1 Elite — Ironman 70.3 Valdivia",
      "Pos 11 - 2025 World Triathlon Cup San Pedro de la Paz - Elite Men",
      "Pos 7 - 2025 World Triathlon Cup Viña del Mar - Elite Men",
      "Pos 20 - 2025 World Triathlon Championship Finals Wollongong - Elite Men",
      "Pos 7 - 2025 World Triathlon Championship Series Karlovy Vary - Elite Men",
      "Pos 20 - 2025 World Triathlon Championship Series French Rivera",
      "Pos 13 - 2025 World Triathlon Championship Series Hamburg - Elite Men",
      "Pos 7 - 2025 World Triathlon Cup Huatulco",
      "Pos 1 - 2025 Americas Triathlon Championships Calima - Elite Men",
      "Pos 38 - 2025 World Triathlon Series Yokohama - Elite Men",
      "Pos 1 - 2025 Americas South Americas triathlon Championships Santiago - Mixed Relay",
      "Pos 2 - 2025 Americas South Americas triathlon Championships Santiago - Elite Men",
      "Pos 4 - Ironman 70.3 Pucón 2025",
    ],
  },
  {
    year: "2024",
    items: [
      "Pos 8 - 2024 World Triathlon Cup Brasilia - Elite Men",
      "Pos 2 - 2024 Americas Triathlon Premium Cup Viña del Mar - Elite Men",
      "Pos 28 - Paris 2024 Olympic Games",
      "Pos 18 - 2024 World Triathlon Cup Huatulco",
      "Pos 45 - 2024 World Triathlon Championship Series Yokohama",
      "Pos 3 - 2024 World Triathlon Cup Wollongong",
      "Pos 58 - 2024 World Triathlon Cup Hong Kong - Elite Men",
      "Pos 7 - 2024 Americas Triathlon Championships Miami - Elite Men",
    ],
  },
  {
    year: "2023",
    items: [
      "Pos: 11 - 2023 World Triathlon Cup Vina del Mar - Elite Men",
      "Pos: 8 - 2023 Santiago Pan American Games - Mixed Relay",
      "Pos: 8 - 2023 Santiago Pan American Games - Elite Men",
      "Pos: 6 - 2023 Americas Triathlon Championships Veracruz - Elite Men",
      "Pos: 41 - 2023 World Triathlon Olympic Games Test Event Paris - Elite Men",
      "Pos: 48 - 2023 World Triathlon Championship Series Sunderland - Elite Men",
      "Pos: 41 - 2023 World Triathlon Sprint & Relay Championships Hamburg - Elite Men",
      "Pos: 19 - 2023 World Triathlon Championship Series Montreal - Elite Men",
      "Pos: 8 - 2023 World Triathlon Cup Huatulco - Elite Men",
      "Pos: 24 - 2023 World Triathlon Championship Series Cagliari - Elite Men",
      "Pos: 2 - 2023 Americas Triathlon Cup and South American Championships Lima - Elite Men",
      "Pos: 33 - 2023 World Triathlon Cup New Plymouth - Elite Men"
    ],
  },
];

export default function ResultadosPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px",
          color: "white",
        }}
      >
        {/* TITULO */}
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Resultados</h1>
        <p style={{ opacity: 0.8, maxWidth: 720 }}>
          Trayectoria competitiva e hitos principales.
        </p>

        {/* BLOQUE 1: RECORDS */}
        <section style={{ marginTop: 28 }}>
          <div
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(0,0,0,.22)",
              padding: 26,
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  fontSize: 12,
                  opacity: 0.7,
                  marginBottom: 8,
                }}
              >
              
              </div>
              <h2 style={{ margin: 0, fontSize: 34, fontWeight: 700 }}>
                Records
              </h2>
            </div>

            <div style={{ display: "grid", gap: 14, maxWidth: 760, margin: "0 auto" }}>
              {records.map((r) => (
                <div key={r.title} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>
                    {r.title}
                  </div>
                  <div style={{ opacity: 0.8, lineHeight: 1.6, fontSize: 14 }}>
                    {r.lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  <div
                    style={{
                      height: 1,
                      background: "rgba(255,255,255,.10)",
                      margin: "14px auto",
                      maxWidth: 520,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOQUE 2: RESULTADOS POR AÑO (ACORDEÓN) */}
        <section style={{ marginTop: 28 }}>
          <div
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(0,0,0,.22)",
              padding: 26,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <div
                style={{
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  fontSize: 12,
                  opacity: 0.7,
                  marginBottom: 8,
                }}
              >
              
              </div>
              <h2 style={{ margin: 0, fontSize: 34, fontWeight: 700 }}>
                Mis resultados
              </h2>
            </div>

            <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 10 }}>
              {resultsByYear.map((block, idx) => (
                <details
                  key={block.year}
                  open={idx === 0} // el primero abierto (cámbialo si quieres)
                  style={{
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,.12)",
                    background: "rgba(0,0,0,.18)",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      userSelect: "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ opacity: 0.8 }}>⚡</span>
                      <span style={{ fontWeight: 800 }}>{block.year}</span>
                    </div>

                    <span style={{ opacity: 0.7 }}>▾</span>
                  </summary>

                  <div
                    style={{
                      padding: "0 18px 16px",
                      opacity: 0.85,
                      lineHeight: 1.7,
                      fontSize: 14,
                    }}
                  >
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {block.items.map((txt, i) => (
                        <li key={i} style={{ marginTop: 8 }}>
                          {txt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>

            {/* estilos para que el summary no muestre el triangulito default en algunos browsers */}
          </div>
        </section>
      </main>
    </div>
  );
}
