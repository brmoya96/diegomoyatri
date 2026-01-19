"use client";
export default function Footer() {
    type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        color: "inherit",
        textDecoration: "none",
        opacity: 0.75,
        transition: "opacity .2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
    >
      {children}
    </a>
  );
}
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0a0a0a, #050505)",
        color: "white",
        padding: "80px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 60,
        }}
      >
        {/* LEFT */}
        <div>
          <h3 style={{ fontSize: 20, marginBottom: 16 }}>Diego Moya</h3>

          <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
            Triatleta Profesional Chileno<br />
            Ironman & 70.3<br />
            Campeón IM 70.3 Valdivia<br />
            Clasificado Olímpico
          </p>

          <div style={{ marginTop: 20, display: "grid", gap: 8 }}>
            <FooterLink href="https://linktr.ee/">→ Mi Linktree</FooterLink>
            <FooterLink href="https://www.instagram.com/dieg0_moya/">→ Instagram</FooterLink>
            <FooterLink href="https://www.facebook.com/diego.moyachamorro">→ Facebook</FooterLink>
            <FooterLink href="https://www.youtube.com/@DiegoMoyaTRI">→ YouTube</FooterLink>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h4 style={{ fontSize: 14, opacity: 0.6, marginBottom: 16 }}>
            Navegación
          </h4>

          <div style={{ display: "grid", gap: 10 }}>
            <FooterLink href="/">Inicio</FooterLink>
            <FooterLink href="/partners">Partners</FooterLink>
            <FooterLink href="/media">Media</FooterLink>
            <FooterLink href="/contacto">Contacto</FooterLink>
            <FooterLink href="/legal">Protección de datos</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h4 style={{ fontSize: 14, opacity: 0.6, marginBottom: 16 }}>
            Recibe novedades
          </h4>

          <div
            style={{
              border: "1px solid rgba(255,255,255,.25)",
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              maxWidth: 320,
            }}
          >
            <input
              placeholder="E-mail"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                flex: 1,
              }}
            />
            <span style={{ opacity: 0.6 }}>→</span>
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            <SocialIcon href="https://www.facebook.com/diego.moyachamorro">f</SocialIcon>
            <SocialIcon href="https://www.instagram.com/dieg0_moya">◯</SocialIcon>
            <SocialIcon href="https://www.youtube.com/@DiegoMoyaTRI">▶</SocialIcon>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: 60,
          borderTop: "1px solid rgba(255,255,255,.1)",
          paddingTop: 20,
          fontSize: 12,
          opacity: 0.5,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Diego Moya · All rights reserved
      </div>
    </footer>
  );
}
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: "rgba(255,255,255,.75)",
        transition: "opacity .2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
    >
      {children}
    </a>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      style={{
        width: 36,
        height: 36,
        border: "1px solid rgba(255,255,255,.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "white",
        opacity: 0.7,
        transition: "opacity .2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
    >
      {children}
    </a>
  );
}