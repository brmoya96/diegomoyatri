import Header from "../components/Header";

export default function ContactoPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", color: "white" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Contacto</h1>
        <p style={{ opacity: 0.8 }}>Auspicios, prensa, coaching y colaboraciones.</p>

        <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
          <a
            href="mailto:diegomoyatri@gmail.com"
            style={{
              padding: 16,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(0,0,0,.25)",
              textDecoration: "none",
              color: "white",
            }}
          >
            <div style={{ opacity: 0.7, fontSize: 12 }}>Mail</div>
            <div style={{ fontWeight: 800 }}>diegomoyatri@gmail.com</div>
          </a>
        </div>
      </main>
    </div>
  );
}