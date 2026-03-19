import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Contact — Robert Platania',
  description: 'Contactez Robert Platania pour toute demande concernant ses oeuvres.',
};

export default function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
      <div className="container">
        <ScrollReveal>
          <p className="section__eyebrow">Ecrire</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="section__title">Contact</h1>
        </ScrollReveal>

        <div className="contact-grid" style={{ marginTop: 48 }}>
          <ScrollReveal delay={200}>
            <div>
              <p className="section__text">
                Pour toute question concernant les oeuvres de Robert Platania —
                acquisition, exposition, collaboration — n'hesitez pas a nous ecrire.
              </p>
              <div style={{ marginTop: 48 }}>
                <p className="section__eyebrow" style={{ marginBottom: 8 }}>Email</p>
                <p style={{ color: 'var(--color-text)', fontSize: 15 }}>
                  contact@robertplatania.com
                </p>
              </div>
              <div style={{ marginTop: 32 }}>
                <p className="section__eyebrow" style={{ marginBottom: 8 }}>Atelier</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
                  Sur rendez-vous uniquement.<br />
                  Contactez-nous pour organiser une visite.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
