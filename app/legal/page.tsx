import Header from "../components/Header";

export default function LegalPage() {
  return (
    
    <main
    
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "56px 24px",
        color: "white",
      }}
    ><Header />
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 40, fontWeight: 600, marginBottom: 10 }}>
          Legal
        </h1>
        <p style={{ opacity: 0.7, lineHeight: 1.6, maxWidth: 760 }}>
          Transparencia y protección de datos. Aquí encontrarás cómo recopilamos,
          usamos y resguardamos la información que compartes con DiegoMoyaTri.
        </p>
      </header>

      <section
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.03)",
          borderRadius: 18,
          padding: 28,
        }}
      >
        <div style={{ display: "grid", gap: 26 }}>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
              Protección de datos
            </h2>
            <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
              En DiegoMoyaTri, la protección de tus datos personales es una prioridad.
              La información entregada a través de formularios, suscripciones o contacto
              se utiliza únicamente para responder tus solicitudes, mejorar tu experiencia
              y enviarte comunicaciones relacionadas con el sitio cuando corresponda.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
              Qué datos recopilamos
            </h2>
            <ul style={{ opacity: 0.75, lineHeight: 1.8, paddingLeft: 1 }}>
          Nombre y correo electrónico (cuando lo proporcionas).
              <li>Mensajes y contenido enviado mediante formularios.</li>
      
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
              Uso y resguardo
            </h2>
            <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
              No vendemos ni compartimos tus datos con terceros para fines comerciales.
              Aplicamos medidas razonables de seguridad para resguardar la información y
              la conservamos solo durante el tiempo necesario para cumplir el propósito
              para el cual fue recopilada.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
              Tus derechos
            </h2>
            <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
              Puedes solicitar acceso, rectificación o eliminación de tus datos, así como
              retirar tu consentimiento para comunicaciones futuras. Para ejercer estos
              derechos, contáctanos a través del canal indicado en el sitio.
            </p>

            
          </div>

          <p style={{ opacity: 0.55, fontSize: 13 }}>
            Última actualización: {new Date().toLocaleDateString("es-CL")}
          </p>
        </div>
      </section>
    </main>
  );
}
