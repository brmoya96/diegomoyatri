"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/presentacion", label: "Presentación" },
    { href: "/partners", label: "Partners" },
    { href: "/resultados", label: "Resultados" },
    { href: "/coaching", label: "Coaching" },
    { href: "/media", label: "Media" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header style={{ width: "100%", position: "relative", zIndex: 50 }}>
      {/* TOP BAR (igual) */}
      <div style={{ width: "100%", padding: "14px 24px", color: "rgba(255,255,255,.75)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <span>CHL | Español</span>
          <a href="/contacto" style={{ color: "inherit", textDecoration: "none", opacity: 0.9 }}>
            Contacto
          </a>
        </div>
      </div>

      {/* LOGO CENTRADO (igual, pero le agregamos burger SOLO en mobile) */}
      <div className="dm-logo-row" style={{ width: "100%", padding: "14px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
          }}
        >
          {/* BURGER (solo mobile) */}
          <button
            className="dm-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
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
            <div style={{ display: "grid", gap: 6 }}>
              <span style={{ width: 18, height: 2, background: "white", display: "block", opacity: 0.9 }} />
              <span style={{ width: 18, height: 2, background: "white", display: "block", opacity: 0.9 }} />
              <span style={{ width: 18, height: 2, background: "white", display: "block", opacity: 0.9 }} />
            </div>
          </button>

          {/* LOGO (UN SOLO LOGO, NUNCA SE DUPLICA) */}
          <a
            href="/"
            style={{ display: "inline-block", transition: "opacity .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <img
              src="/logo-diego-1.png"
              alt="Diego Moya"
              className="dm-logo"
              style={{
                height: 150,
                width: "auto",
                objectFit: "contain",
                display: "block",
                cursor: "pointer",
                transform: "scale(1.35)",
                transformOrigin: "center",
              }}
            />
          </a>
        </div>
      </div>

      {/* MENU CENTRADO (igual, solo que en mobile lo ocultamos con CSS) */}
      <div className="dm-desktop-nav-wrap" style={{ width: "100%", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ul
            className="dm-desktop-nav"
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
            {items.map((item) => (
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

      {/* PANEL MOBILE (solo aparece si open=true y estás en mobile) */}
      {open && (
        <div className="dm-mobile-panel">
          <div className="dm-mobile-panel-inner">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="dm-mobile-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      
    </header>
  );
}
