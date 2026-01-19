// app/partners/page.tsx
import Image from "next/image";
import Header from "../components/Header";
const partners = [
  {
    key: "adidas",
    name: "Adidas",
    logo: "/sponsors/adidas.png",
    photo: "/partners/adidas.jpg",
    text:
      "Adidas me acompaña en el alto rendimiento: material de competencia, entrenamiento y un enfoque total en performance.",
    cta: { label: "Ver Adidas", href: "https://www.adidas.cl" },
  },
  {
    key: "itau",
    name: "Itaú",
    logo: "/sponsors/itau.png",
    photo: "/partners/itau.jpg",
    text:
      "Itaú impulsa el proyecto a largo plazo. Un partner clave para seguir compitiendo al máximo nivel.",
    cta: { label: "Ver Itaú", href: "https://www.itau.cl" },
  },
  {
    key: "subaru",
    name: "Subaru",
    logo: "/sponsors/subaru.png",
    photo: "/partners/subaru.jpg",
    text:
      "Subaru es parte del camino: logística, viajes y soporte en competencias. Rendimiento también fuera de la pista.",
    cta: { label: "Ver Subaru", href: "https://www.subaru.cl" },
  },
  {
    key: "z2",
    name: "Z2",
    logo: "/sponsors/z2.png",
    photo: "/partners/z2.jpg",
    text:
      "Subaru es parte del camino: logística, viajes y soporte en competencias. Rendimiento también fuera de la pista.",
    cta: { label: "Ver Subaru", href: "https://www.z2.cl" },
  },
  {
    key: "alemana sport",
    name: "Alemana Sport",
    logo: "/sponsors/alemana-sport.png",
    photo: "/partners/alemana-sport.jpg",
    text:
      "Subaru es parte del camino: logística, viajes y soporte en competencias. Rendimiento también fuera de la pista.",
    cta: { label: "Ver Subaru", href: "https://www.alemanasport.cl" },
  },
  {
    key: "factor",
    name: "Factor",
    logo: "/sponsors/factor.png",
    photo: "/partners/factor.jpg",
    text:
      "Subaru es parte del camino: logística, viajes y soporte en competencias. Rendimiento también fuera de la pista.",
    cta: { label: "Ver Subaru", href: "https://www.weltek.cl" },
  },
    {
    key: "socks labs",
    name: "Socks Labs",
    logo: "/sponsors/socks-labs.png",
    photo: "/partners/socks-labs.jpg",
    text:
      "Subaru es parte del camino: logística, viajes y soporte en competencias. Rendimiento también fuera de la pista.",
    cta: { label: "Ver Subaru", href: "https://www.sockslabs.cl" },
  },
  // agrega más...
];

export default function PartnersPage() {
  return (
    <main>
      <Header />
    <main></main>
      {/* HERO / título */}
      <section className="px-6 pt-16 pb-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-white text-5xl md:text-6xl font-light tracking-wide">
            Partners
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Marcas que impulsan el proyecto.
          </p>
        </div>
      </section>

      {/* LOGOS GRID (estilo Laidlow: logos chicos, en color, aire) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-black text-5xl font-light tracking-wide">
            Sponsors & Partners
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-10 items-center">
            {partners.map((p) => (
              <div key={p.key} className="flex items-center justify-center">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={60}
                  className="h-10 w-auto object-contain"
                  priority={false}
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#all"
              className="inline-flex items-center gap-2 text-black/80 hover:text-black"
            >
              Todos los partners <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* STORIES por marca (foto + texto al lado, alternado) */}
      <section id="all" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-20">
          {partners.map((p, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={p.key}
                className={`grid gap-10 items-center lg:grid-cols-12 ${
                  reverse ? "" : ""
                }`}
              >

                {/* TEXTO */}
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="bg-[#f2f2f2] p-10 md:p-12">
                    <h3 className="text-5xl font-light tracking-wide text-black">
                      {p.name}
                    </h3>
                    <p className="mt-6 text-black/70 leading-relaxed">
                      {p.text}
                    </p>

                    <div className="mt-8">
                      <a
                        href={p.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 bg-black text-white tracking-wide"
                      >
                        {p.cta.label}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}