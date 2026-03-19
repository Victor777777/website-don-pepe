import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'A propos — Robert Platania',
  description: 'Decouvrez Robert Platania, peintre expressionniste abstrait. Sa demarche, ses techniques, ses influences.',
};

export default function AProposPage() {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}>
      <div className="container">
        <ScrollReveal>
          <p className="section__eyebrow">L'artiste</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="section__title">Robert Platania</h1>
        </ScrollReveal>

        <div className="about-grid" style={{ marginTop: 48 }}>
          <ScrollReveal delay={200}>
            <div className="about-photos">
              <div className="about-portrait">
                <img
                  src="/paintings/robert-platania-portrait.jpg"
                  alt="Robert Platania, assis parmi ses oeuvres"
                  loading="lazy"
                />
              </div>
              <div className="about-atelier">
                <img
                  src="/paintings/robert-platania-atelier.jpg"
                  alt="Robert Platania travaillant dans son atelier"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="about-text">
              <h3>La peinture comme matiere vivante</h3>
              <p>
                Robert Platania est un peintre expressionniste abstrait dont le travail
                s'inscrit dans la lignee des grands gestuels — de Kooning, Soulages,
                Mitchell — tout en portant une chaleur qui lui est propre, profondement
                mediterraneenne.
              </p>
              <p>
                Ses toiles ne se regardent pas de loin. Elles exigent la proximite :
                la matiere y est epaisse, travaillee au couteau a palette avec une
                intensite qui laisse des reliefs presque sculpturaux a la surface.
                Chaque geste est definitif, chaque strate porte la memoire du precedent.
              </p>

              <h3>Un langage de feu et de nuit</h3>
              <p>
                Le vocabulaire de Platania est celui des forces primordiales. Le feu,
                la lave en fusion, la nuit cosmique, les profondeurs oceanes, la foret
                qui brule. Sa palette — dominee par les rouges ardents, les oranges
                incandescents et les ors sur des fonds d'un noir profond — ne cherche
                pas a representer ces elements. Elle <em>est</em> ces elements.
              </p>
              <p>
                Plus de quatre-vingts pour cent de son oeuvre vibre dans les tons du feu
                et de la nuit. Quand le bleu apparait, c'est celui de l'abysse ou du ciel
                d'orage. Quand le vert surgit, c'est celui d'une foret ou la lumiere
                ne penetre qu'en eclats.
              </p>

              <h3>L'exception qui confirme</h3>
              <p>
                Une oeuvre echappe a cette incandescence : <em>Architecture doree</em>,
                N&deg;64. Fond blanc, lignes geometriques, palette retenue. Elle temoigne
                d'une maitrise qui sait aussi se contenir — et revele la diversite
                d'un artiste que l'on aurait tort de reduire a un seul registre.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="about-techniques">
          <ScrollReveal>
            <p className="section__eyebrow">Technique</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section__title">La forge du geste</h2>
          </ScrollReveal>

          <div className="technique-grid">
            <ScrollReveal delay={0}>
              <div className="technique-card">
                <h4 className="technique-card__title">Empâtement epais</h4>
                <p className="technique-card__text">
                  La matiere n'est pas un moyen, c'est le sujet. Les couches
                  successives creent un relief quasi-sculptural que la photographie
                  ne peut qu'approcher.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="technique-card">
                <h4 className="technique-card__title">Couteau a palette</h4>
                <p className="technique-card__text">
                  Pas de pinceau delicat : le couteau impose des gestes larges,
                  des arêtes vives, des textures rugueuses qui vibrent sous
                  la lumiere rasante.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="technique-card">
                <h4 className="technique-card__title">Palette de feu</h4>
                <p className="technique-card__text">
                  Rouges profonds, oranges brulants, ors solaires — poses sur des
                  fonds d'un noir absolu. La couleur jaillit de la nuit comme
                  la lave du volcan.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
