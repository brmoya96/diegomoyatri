"use client";
// app/partners/page.tsx
import Image from "next/image";
import Header from "../components/Header";

// EJEMPLO de data. Usa tu array real "partners"
const partners = [
  {
    key: "adidas",
    name: "ADIDAS",
    logo: "/sponsors/adidas-w-3.png",
    text: "Adidas me acompaña en cada etapa del alto rendimiento, entregando equipamiento de competencia y entrenamiento diseñado para exigencias máximas. Compartimos una visión clara: innovar, superar límites y rendir al más alto nivel, en cada sesión y en cada carrera.",
    photo: "/partners/adidas.jpeg",
    cta: { href: "https://www.adidas.cl", label: "Ver Adidas" },
  },
  {
    key: "itau",
    name: "ITAU",
    logo: "/sponsors/itau.png",
    text: "Itaú me acompaña como partner estratégico a largo plazo, entregando respaldo y visión para seguir desarrollando mi carrera deportiva con estabilidad y proyección. Un apoyo clave para competir al más alto nivel, dentro y fuera de la pista.",
    photo: "/partners/itau.png",
    cta: { href: "https://www.itau.cl/personas", label: "Ver Itaú" },
  },
  {
    key: "subaru",
    name: "SUBARU",
    logo: "/sponsors/subaru.png",
    text: "Subaru representa confiabilidad, rendimiento y seguridad, valores fundamentales tanto en el deporte como en la vida diaria. Su apoyo me permite enfocarme en entrenar y competir, sabiendo que cuento con un partner sólido en cada desafío.",
    photo: "/partners/subaru.JPEG",
    cta: { href: "https://www.subaru.cl/", label: "Ver Subaru" },
  },
  {
    key: "z2",
    name: "Z2",
    logo: "/sponsors/z2.png",
    text: "Z2 es parte esencial de mi preparación y competencia. Su enfoque en nutrición deportiva de alto rendimiento me permite optimizar cada entrenamiento y carrera, asegurando energía, recuperación y consistencia en los momentos decisivos.",
    photo: "/partners/z2.jpg",
    cta: { href: "https://www.z2alwayschasingcl.com/", label: "Ver Z2" },
  },
  {
    key: "alemanasport",
    name: "ALEMANAS PORT",
    logo: "/sponsors/alemana-sport.png",
    text: "Alemana Sport me acompaña como aliado técnico, entregando equipamiento y soporte especializado para el alto rendimiento. Compartimos una visión clara: cuidar cada detalle para competir al máximo nivel.",
    photo: "/partners/alemana-sport.png",
    cta: { href: "https://www.alemanasport.cl/", label: "Ver Alemana Sport" },
  },
  {
    key: "factor",
    name: "FACTOR",
    logo: "/sponsors/factor.png",
    text: "Factor representa ingeniería, velocidad y precisión. Competir sobre una bicicleta diseñada sin compromisos me permite expresar todo mi potencial, tanto en entrenamientos como en las carreras más exigentes del circuito internacional.",
    photo: "/partners/factor.jpg",
    cta: { href: "https://www.weltek.cl/102-factor-bikes", label: "Ver Factor" },
  },
  {
    key: "blueseventy",
    name: "BLUESEVENTY",
    logo: "/sponsors/blueseventy.png",
    text: "Blueseventy ha sido clave en mi desarrollo en el agua. Sus trajes y equipamiento me entregan eficiencia, confianza y rendimiento en cada brazada, marcando la diferencia desde el inicio de la competencia.",
    photo: "/partners/blueseventys.jpg",
    cta: { href: "https://weltek.cl/12-wetsuits", label: "Ver Blueseventy" },
  },
  {
    key: "sockslabs",
    name: "SOCKS LAB",
    logo: "/sponsors/socks-labs.png",
    text: "Socks Labs cuida uno de los aspectos más subestimados del rendimiento: la comodidad y protección durante largas horas de esfuerzo. Un detalle que marca la diferencia en entrenamientos intensos y días de carrera.",
    photo: "/partners/socks-labs.jpg",
    cta: { href: "https://sockslab.cl/", label: "Ver Socks Labs" },
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <div id="top" />
      <Header />

      {/* CONTENEDOR PRINCIPAL (MISMO FORMATO QUE RESULTADOS) */}
      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px",
          color: "white",
        }}
      >
        {/* HERO / título */}
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Auspiciadores</h1>
        <p style={{ opacity: 0.8, maxWidth: 720 }}>
          Marcas que impulsan mi proyecto.
        </p>

        {/* LOGOS GRID (clickeables -> bajan a su sección) */}
        <section style={{ marginTop: 28 }}>
          <div
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(0,0,0,.22)",
              padding: 22,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
                gap: 18,
                alignItems: "center",
              }}
            >
              {partners.map((p) => (
                <a
                  key={p.key}
                  href={`#${p.key}`}
                  aria-label={`Ir a ${p.name}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,.08)",
                    background: "rgba(0,0,0,.18)",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "opacity .2s ease, transform .2s ease",
                    opacity: 0.95,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.95";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={140}
                    height={60}
                    style={{ height: 34, width: "auto", objectFit: "contain" }}
                  />
                </a>
              ))}
            </div>

            <div style={{ marginTop: 18 }}>
              <a
                href="#all"
                style={{
                  color: "rgba(255,255,255,.8)",
                  textDecoration: "none",
                  transition: "opacity .2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
              >
                Todos los partners <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* STORIES por marca (foto + texto al lado, alternado, mismo look oscuro) */}
        <section id="all" style={{ marginTop: 28, display: "grid", gap: 22 }}>
          {partners.map((p, idx) => {
            const reverse = idx % 2 === 1;

            return (
              <div
                key={p.key}
                id={p.key} // 👈 destino para el click del logo
                className="partner-card"
                style={{
                  scrollMarginTop: 140, // 👈 para que no quede tapado por el header
                  display: "grid",
                  gap: 18,
                  alignItems: "center",
                  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
                  padding: 18,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(0,0,0,.22)",
                }}
              >
                {/* FOTO */}
                <div
                  className="partner-photo"
                  style={{
                    gridColumn: "span 7 / span 7",
                    order: reverse ? 2 : 1,
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(255,255,255,.04)",
                    minHeight: 320,
                    position: "relative",
                  }}
                >
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={`${p.name} x Diego`}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                      }}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  ) : (
                    <div
                      style={{
                        height: 320,
                        display: "grid",
                        placeItems: "center",
                        opacity: 0.7,
                      }}
                    >
                      Agrega una foto en <code>p.photo</code>
                    </div>
                  )}
                </div>

                {/* TEXTO */}
                <div
                  className="partner-text"
                  style={{
                    gridColumn: "span 5 / span 5",
                    order: reverse ? 1 : 2,
                    padding: 8,
                  }}
                >
                  <h3 style={{ fontSize: 40, fontWeight: 600, margin: 0 }}>
                    {p.name}
                  </h3>
                  <p style={{ marginTop: 12, opacity: 0.8, lineHeight: 1.7 }}>
                    {p.text}
                  </p>

                  <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                    <a
                      href={p.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px 18px",
                        borderRadius: 14,
                        border: "1px solid rgba(255,255,255,.14)",
                        background: "rgba(255,255,255,.06)",
                        color: "white",
                        textDecoration: "none",
                        transition: "opacity .2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      {p.cta.label}
                    </a>

                    {/* Botón opcional: volver arriba a los logos */}
                    <a
                      href="#top"
                      aria-label="Subir"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px 14px",
                        borderRadius: 14,
                        border: "1px solid rgba(255,255,255,.10)",
                        background: "transparent",
                        color: "rgba(255,255,255,.75)",
                        textDecoration: "none",
                      }}
                    >
                      ↑
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* ancla para "volver arriba" */}
      <style jsx>{`
        /* Evita overflow raro en desktop */
        .partner-card {
          width: 100%;
        }

        /* Desktop: 2 columnas siempre */
        @media (min-width: 901px) {
          .partner-card {
            grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
          }
          .partner-photo {
            grid-column: span 7 / span 7 !important;
            order: 1;
            min-height: 320px;
          }
          .partner-text {
            grid-column: span 5 / span 5 !important;
            order: 2;
          }
        }

        /* Mobile: se apila */
        @media (max-width: 900px) {
          .partner-card {
            grid-template-columns: 1fr !important;
          }
          .partner-photo {
            grid-column: 1 / -1 !important;
            order: 1 !important;
            min-height: 220px;
          }
          .partner-text {
            grid-column: 1 / -1 !important;
            order: 2 !important;
          }
        }
      `}</style> 
    </div>
  );
}
