"use client";

import React, { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xlggkboz"; // <-- PEGA AQUÍ tu endpoint real

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
          <h3 style={{ fontSize: 20, marginBottom: 16 }}>
            Diego Moya Chamorro
          </h3>

          <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
            Triatleta Profesional Chileno
            <br />
          </p>

          <div style={{ marginTop: 20, display: "grid", gap: 8 }}>
            <FooterLink href="https://linktr.ee/">→ Mi Linktree</FooterLink>
            <FooterLink href="https://www.instagram.com/dieg0_moya/">
              → Instagram
            </FooterLink>
            <FooterLink href="https://www.facebook.com/diego.moyachamorro">
              → Facebook
            </FooterLink>
            <FooterLink href="https://www.youtube.com/@DiegoMoyaTRI">
              → YouTube
            </FooterLink>
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

          {/* FORM REAL -> guarda emails */}
          <form
            action={FORMSPREE_URL}
            method="POST"
            onSubmit={() => {
              // Esto solo cambia el mensajito visual; Formspree igual procesa el envío.
              // Si quieres hacerlo 100% sin recargar, te lo dejo en versión fetch.
              setTimeout(() => setStatus("success"), 400);
            }}
            style={{ maxWidth: 320 }}
          >
            <div
              style={{
                border: "1px solid rgba(255,255,255,.25)",
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "white",
                  flex: 1,
                }}
              />

              {/* Flecha como botón submit (clickeable) */}
              <button
                type="submit"
                aria-label="Suscribirse"
                style={{
                  border: "none",
                  background: "transparent",
                  color: "rgba(255,255,255,.75)",
                  cursor: "pointer",
                  padding: 0,
                  marginLeft: 10,
                  fontSize: 16,
                  lineHeight: 1,
                  transition: "opacity .2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
              >
                →
              </button>
            </div>

            {/* Mensaje chiquito (opcional) */}
            {status === "success" && (
              <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
                ¡Listo! Te agregamos a la lista.
              </div>
            )}
            {status === "error" && (
              <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
                Hubo un error. Intenta de nuevo.
              </div>
            )}
          </form>

          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            <SocialIcon href="https://www.facebook.com/diego.moyachamorro">
              f
            </SocialIcon>
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
      rel="noopener noreferrer"
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