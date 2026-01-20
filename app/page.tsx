"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

const sponsors = [
  { name: "Adidas", file: "adidas.png" },
  { name: "Itaú", file: "itau.png" },
  { name: "Subaru", file: "subaru.png" },
  { name: "Z2", file: "z2.png" },
  { name: "Factor", file: "factor.png" },
  { name: "Blueseventy", file: "blueseventy.png" },
  { name: "Alemana Sport", file: "alemana-sport.png" },
  { name: "Socks Labs", file: "socks-labs.png" },
];



const heroImages = [
  "/images/hero-1.JPG",
  "/images/hero-2.jpg",
  "/images/hero-3.JPG",
  "/images/hero-4.JPG",
];

function Banner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((v) => (v + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ width: "100%", height: 520, position: "relative", overflow: "hidden" }}>
      {heroImages.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Banner ${index + 1}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            opacity: index === active ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      {/* overlay oscuro premium */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.65))",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function SponsorsGrid() {
  return (
    <section style={{ background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 24px" }}>
        <h2
          style={{
            fontSize: 48,
            margin: 0,
            letterSpacing: "-0.02em",
            color: "#000",
            opacity: 1,
            fontWeight: 500,
          }}
        >
          Auspiciadores
        </h2>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          {sponsors.map((s) => (
            <div key={s.name} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={`/sponsors/${s.file}`}
                alt={s.name}
                style={{
                  height: 46,
                  width: "auto",
                  maxWidth: 170,
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.85";
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 50 }}>
          <a
            href="/partners"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#111",
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            Auspiciadores <span style={{ fontSize: 18 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <SponsorsGrid />
    </div>
  );
}

function Header() {
  
  return (
    <header style={{ width: "100%", position: "relative", zIndex: 50 }}>
      {/* TOP BAR */}
      <div style={{ width: "100%", padding: "14px 24px", color: "rgba(255,255,255,.75)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <span>CHL | Español</span>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none", opacity: 0.9 }}>
            Contacto
          </a>
        </div>
      </div>

      {/* LOGO CENTRADO */}
      <div style={{ width: "100%", padding: "14px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center" }}>
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

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-white transition"
    >
      {label}
    </a>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function Kpi({ big, label }: { big: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-2xl font-extrabold">{big}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-5xl font-light tracking-wide !text-black !opacity-100">
        {title}
      </h2>
      <p className="mt-4 text-black/60">{subtitle}</p>
    </div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-muted mt-1">{desc}</div>
    </div>
  );
}

function TagCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="inline-flex items-center rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-semibold">
        {title}
      </div>
      <div className="text-sm text-muted mt-2">{desc}</div>
    </div>
  );
}


function Direct({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/5 transition"
    >
      <div className="text-xs text-white/60">{label}</div>
      <div className="font-semibold">{value}</div>
    </a>
  );
}

function ContactForm() {
  // Opción pro: Formspree/Netlify. Dejo “mailto” como fallback.
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const message = String(fd.get("message") || "");

    const to = "diegomoyatri@gmail.com";
    const subject = encodeURIComponent(`Contacto Web - ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company || "-"}\n\nMensaje:\n${message}\n`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-2 sm:grid-cols-2">
        <Field label="Nombre" name="name" placeholder="Tu nombre" required />
        <Field label="Email" name="email" placeholder="tu@correo.com" type="email" required />
      </div>
      <Field label="Marca / Empresa (opcional)" name="company" placeholder="Nombre de la marca" />
      <TextArea label="Mensaje" name="message" placeholder="Objetivo, fechas, entregables, presupuesto (si aplica)..." required />
      <button className="btn-primary" type="submit">Enviar</button>

      {status === "sent" ? (
        <p className="text-xs text-white/60">Se abrirá tu correo para enviar el mensaje.</p>
      ) : (
        <p className="text-xs text-white/60">
          Si quieres envío directo sin mailto: lo conecto a Formspree/Netlify (1 min de setup).
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-white/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-red-500/40"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-white/70">{label}</span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className="min-h-[140px] rounded-2xl border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-red-500/40"
      />
    </label>
  );
}



/** Helpers para botones sin depender de components */
function StyleHelpers() {
  return (
    <style jsx global>{`
      .btn{
        display:inline-flex; align-items:center; justify-content:center;
        padding: 12px 14px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,.12);
        background: rgba(255,255,255,.04);
        color: rgba(229,231,235,.92);
        font-weight: 700;
        transition: transform .15s ease, background .15s ease, border-color .15s ease;
      }
      .btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.18); }
      .btn-primary{
        display:inline-flex; align-items:center; justify-content:center;
        padding: 12px 14px;
        border-radius: 16px;
        border: 1px solid rgba(239,68,68,.35);
        background: linear-gradient(135deg, rgba(239,68,68,.95), rgba(239,68,68,.55));
        color: white;
        font-weight: 800;
        transition: transform .15s ease, filter .15s ease;
      }
      .btn-primary:hover{ transform: translateY(-1px); filter: brightness(1.05); }
      .icon-btn{
        height: 40px; width: 40px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,.12);
        background: rgba(0,0,0,.35);
        color: white;
        font-weight: 900;
        transition: background .15s ease, transform .15s ease;
      }
      .icon-btn:hover{ background: rgba(255,255,255,.08); transform: translateY(-1px); }
    `}</style>
  );
}