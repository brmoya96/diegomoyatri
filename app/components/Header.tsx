"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/presentacion", label: "PRESENTACIÓN" },
    { href: "/partners", label: "PARTNERS" },
    { href: "/resultados", label: "RESULTADOS" },
    { href: "/coaching", label: "COACHING" },
    { href: "/media", label: "MEDIA" },
    { href: "/contacto", label: "CONTACTO" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,.35)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      {/* TOP ROW: idioma + contacto (se mantiene) */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "rgba(255,255,255,.85)",
          fontSize: 14,
        }}
      >
        <div>CHL | Español</div>
        <Link href="/contacto" style={{ color: "rgba(255,255,255,.85)", textDecoration: "none" }}>
          Contacto
        </Link>
      </div>

      {/* MAIN ROW: logo + nav (desktop) + burger (mobile) */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 24px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* LOGO (click -> home) */}
        <Link href="/" onClick={() => setOpen(false)} style={{ display: "inline-block" }}>
          <Image
            src="/logo-diego.png"  // <-- ajusta si tu logo tiene otro nombre/ruta
            alt="Diego Moya"
            width={140}
            height={64}
            style={{ height: 64, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* NAV DESKTOP (solo desktop) */}
        <nav className="dm-desktop-nav" style={{ position: "absolute", left: 0, right: 0, top: 82 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 34,
              paddingBottom: 10,
              letterSpacing: ".22em",
              fontSize: 12,
              color: "rgba(255,255,255,.65)",
              textTransform: "uppercase",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* BURGER (solo mobile) */}
        <button
          className="dm-mobile-burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          style={{
            position: "absolute",
            right: 18,
            top: 22,
            width: 44,
            height: 44,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(0,0,0,.25)",
            color: "white",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* iconito simple */}
          <div style={{ display: "grid", gap: 6 }}>
            <span style={{ width: 18, height: 2, background: "white", display: "block", opacity: 0.9 }} />
            <span style={{ width: 18, height: 2, background: "white", display: "block", opacity: 0.9 }} />
            <span style={{ width: 18, height: 2, background: "white", display: "block", opacity: 0.9 }} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU (panel desplegable) */}
      {open && (
        <div
          className="dm-mobile-menu"
          style={{
            padding: "8px 18px 18px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            background: "rgba(0,0,0,.55)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 10,
              paddingTop: 10,
              paddingBottom: 6,
              textTransform: "uppercase",
              letterSpacing: ".18em",
              fontSize: 12,
              color: "rgba(255,255,255,.85)",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "12px 12px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(0,0,0,.25)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CSS solo para mostrar/ocultar en mobile sin afectar desktop */}
      <style jsx>{`
        /* Desktop: se ve el nav, se esconde burger */
        @media (min-width: 901px) {
          .dm-desktop-nav {
            display: block;
          }
          .dm-mobile-burger {
            display: none !important;
          }
          .dm-mobile-menu {
            display: none;
          }
        }

        /* Mobile: se esconde nav horizontal, aparece burger */
        @media (max-width: 900px) {
          .dm-desktop-nav {
            display: none;
          }
          .dm-mobile-burger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}