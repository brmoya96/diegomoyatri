import Header from "../components/Header";

const inputStyle = {
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(0,0,0,.35)",
  color: "white",
  fontSize: 14,
};

export default function ContactoPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", color: "white" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Contacto</h1>


        <form
          action="https://formspree.io/f/maqqzowz" // ⬅️ AQUÍ VA TU URL REAL
          method="POST"
          style={{
            maxWidth: 600,
            marginTop: 40,
            padding: 24,
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(0,0,0,.22)",
            display: "grid",
            gap: 14,
          }}
        >


          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            rows={5}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              marginTop: 8,
              padding: "14px 18px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,.18)",
              background: "rgba(255,255,255,.08)",
              color: "white",
              cursor: "pointer",
              fontSize: 14,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            Enviar mensaje
          </button>
        </form>
      </main>
    </div>
  );
}