import Header from "../components/Header";

export default function MediaPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", color: "white" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Media</h1>
        <p style={{ opacity: 0.8 }}>Redes y contenido.</p>

        <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
          {[
            ["Instagram", "@dieg0_moya", "https://instagram.com/dieg0_moya"],
            ["YouTube", "DiegoMoyaTRI", "https://www.youtube.com/@DiegoMoyaTRI"],
            ["Strava", "Diego Alonso Moya Chamorro", "https://www.strava.com/"],
            ["Podcast", "DSD ADENTRO PODCAST", "https://open.spotify.com/"],
          ].map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: 16,
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(0,0,0,.25)",
                textDecoration: "none",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <span style={{ opacity: 0.7 }}>{label}</span>
              <strong style={{ opacity: 0.9 }}>{value}</strong>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}