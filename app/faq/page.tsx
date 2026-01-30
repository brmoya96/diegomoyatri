import Header from "../components/Header";

import Link from "next/link";

const faqs = [
  {
    q: "¿Cómo puedo contactarte?",
    a: "Puedes escribir a través del formulario de contacto del sitio. Respondemos en el menor plazo posible, especialmente para solicitudes relacionadas con entrenamientos, eventos o colaboraciones.",
  },
  {
    q: "¿Publicas planes o contenido de entrenamiento?",
    a: "Sí. El sitio puede incluir contenido informativo y recursos generales. Cuando existan servicios o asesorías específicas, se indicarán sus alcances, condiciones y forma de trabajo en la sección correspondiente.",
  },
  {
    q: "¿Cómo se gestionan mis datos?",
    a: "Solo utilizamos tus datos para responder mensajes y, si lo autorizas, enviarte información relacionada con el sitio. Puedes revisar el detalle en la sección Legal.",
  },
  {
    q: "¿Puedo solicitar eliminación o corrección de mis datos?",
    a: "Sí. Puedes solicitar acceso, rectificación o eliminación de tus datos, además de retirar tu consentimiento para comunicaciones futuras. Escríbenos desde Contacto para gestionar tu solicitud.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">FAQ</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/70">
          Aquí encontrarás respuestas a preguntas frecuentes. Si no ves lo que
          buscas, contáctanos desde la sección{" "}
          <Link href="/contacto" className="text-white underline underline-offset-4 hover:text-white/80">
            Contacto
          </Link>
          .
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-sm">
        <div className="divide-y divide-white/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-white/90 hover:text-white">
                <span className="inline-flex items-center gap-2">
                  <span className="text-white/50 group-open:rotate-90 transition-transform">
                    ▶
                  </span>
                  {item.q}
                </span>
              </summary>

              <p className="mt-3 text-base leading-relaxed text-white/75">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-5">
          <p className="text-sm leading-relaxed text-white/70">
            Para más información sobre el uso de datos personales, revisa{" "}
            <Link href="/legal" className="text-white underline underline-offset-4 hover:text-white/80">
              Legal
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}