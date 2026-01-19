"use client";

export default function Header() {
  return (
    <header style={{ width: "100%", position: "relative", zIndex: 50 }}>
      {/* TOP BAR */}
      <div style={{ width: "100%", padding: "14px 24px", color: "rgba(255,255,255,.75)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <span>CHL | Español</span>
          <a href="/contacto" style={{ color: "inherit", textDecoration: "none", opacity: 0.9 }}>
            Contacto
          </a>
        </div>
      </div>

      {/* LOGO CENTRADO */}
      <div style={{ width: "100%", padding: "14px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center" }}>
          <a
            href="/"
            style={{
                display: "inline-block",
                transition: "opacity .2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
            <img
                src="/logo-diego.png"
                alt="Diego Moya"
                style={{
                height: 150,
                width: "auto",
                objectFit: "contain",
                display: "block",
                cursor: "pointer",
                transform: "scale(1.35)",   // ⬅ agranda solo visual
                transformOrigin: "center",
                }}
            />
            </a>
        </div>
      </div>

      {/* MENU CENTRADO */}
      <div style={{ width: "100%", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              justifyContent: "center",
              gap: 40,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: 13,
              color: "rgba(255,255,255,.75)",
            }}
          >
            {[
              { href: "/presentacion", label: "Presentación" },
              { href: "/partners", label: "Partners" },
              { href: "/resultados", label: "Resultados" },
              { href: "/coaching", label: "Coaching" },
              { href: "/media", label: "Media" },
              { href: "/contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    opacity: 0.75,
                    transition: "opacity .2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
