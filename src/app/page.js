import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/paintings/robert-platania-hero.jpg"
            alt="Robert Platania dans son atelier"
            fetchPriority="high"
          />
        </div>
        <div className="hero__content">
          <ScrollReveal>
            <h1 className="hero__title">
              Robert<br />Platania
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="hero__subtitle">
              Le feu comme langage, la matiere comme geste.
              Trente-deux toiles ou la lave rencontre la lumiere.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Link href="/galerie/" className="hero__cta">
              Decouvrir les oeuvres
              <span className="hero__cta-arrow">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <p className="section__eyebrow">L'univers</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section__title">
              Quand la peinture brule
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="section__text">
              Robert Platania peint comme on forge : au couteau, dans l'epaisseur,
              avec la certitude que la toile est un terrain volcanique. Ses oeuvres
              ne representent pas le feu — elles en sont. Chaque couche d'empâtement
              porte la trace d'un geste qui ne negocie pas avec la surface.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="section__text" style={{ marginTop: 16 }}>
              Six series thematiques — du magma aux profondeurs bleues, des forets
              ardentes aux eclats de joie pure — composent un corpus de trente-deux
              toiles ou l'expressionnisme abstrait rencontre une chaleur profondement
              mediterraneenne.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div style={{ marginTop: 48 }}>
              <Link href="/galerie/" className="hero__cta">
                Explorer la galerie
                <span className="hero__cta-arrow">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
