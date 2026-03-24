import Gallery from '@/components/Gallery';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Galerie | Robert Platania',
  description: '32 oeuvres expressionnistes abstraites en 6 series thematiques par Robert Platania.',
};

export default function GaleriePage() {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
      <div className="container">
        <ScrollReveal>
          <p className="section__eyebrow">Les oeuvres</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="section__title">Galerie</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="section__text" style={{ marginBottom: 48 }}>
            Trente-deux toiles, six series. Cliquez sur une oeuvre pour la decouvrir en detail.
          </p>
        </ScrollReveal>
        <Gallery />
      </div>
    </section>
  );
}
