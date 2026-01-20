import Header from "../components/Header";

export default function PresentacionPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", color: "white" }}>
        <h1 style={{ fontSize: 44, marginBottom: 12 }}>Presentación</h1>
        <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
          Triatleta olímpico, Ironman 70.3.
        </p>

        <div style={{ marginTop: 28, display: "grid", gap: 16 }}>
          <div style={{ padding: 18, border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, background: "rgba(0,0,0,.25)" }}>
            <strong>Resumen</strong>
            <div style={{ marginTop: 8, opacity: 0.8 }}>
              <p>Como deportista, el deporte ha sido el gran motor de mi vida y he tenido la suerte de crecer en una familia de
              deportistas que han apoyado mi carrera. A mis 27 años, llevo 17 años en el mundo del Triatlón, 8 de ellos en
              el circuito deportivo profesional, y he tenido la oportunidad de alcanzar muchas metas junto a mi familia y
              equipo. Además de lo que ya hemos logrado, estamos trabajando arduamente en nuevos objetivos para el
              futuro.<br/><br/></p>
              <p className="mt-4">
              Sin embargo, aunque ya he superado grandes desafíos, siempre hay nuevas metas por alcanzar. Tras una
              participación exitosa en los Juegos Olímpicos de París 2024, sé que aún tengo mucho más por dar. Ahora, mi
              preparación está enfocada en los Juegos Olímpicos de Los Ángeles 2028, con la misma dedicación y pasión
              que me han llevado hasta aquí.<br /><br /></p>
              <p className="mt-4">
              Además, sigo comprometido a transmitir mi pasión por el deporte a niños y jóvenes, asumiendo con
              responsabilidad el ser considerado un referente del deporte nacional. Como parte de este continuo
              crecimiento, me estoy preparando para nuevos desafíos: compitiendo en la distancia larga.
              Seguiré trabajando arduamente para seguir creciendo, alcanzar nuevos logros y superar mis propias
              expectativas en el mundo del deporte.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}