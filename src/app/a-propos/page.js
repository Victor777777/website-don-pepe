import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'A propos | Robert Platania',
  description: 'Ne en 1931, Robert Platania traverse un siecle entier avant de se consacrer pleinement a la peinture expressionniste abstraite au couteau a palette.',
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
        <ScrollReveal delay={150}>
          <p className="about-subtitle">Né en 1931</p>
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
              <p>
                C'est dans un atelier de photographie baigné par la lumière méditerranéenne
                que tout commence. Robert a douze ans quand il plonge les mains pour la
                première fois dans les bacs du laboratoire de son père. Révélateur, fixateur,
                eau. Dans la pénombre rouge de la chambre noire, il assiste à ce miracle
                quotidien : une image qui émerge du néant. Mais le garçon veut aller plus
                loin que la captation. Sur les agrandissements à peine secs, il commence à
                poser du pastel. Des portraits d'enfants, rehaussés à la main, où la couleur
                chair prend vie sous ses doigts, où le bleu d'un vêtement vibre soudain
                contre le grain du papier mat. C'est un geste fondateur. Entre la précision
                photographique et l'élan du pigment, Robert découvre les deux forces qui
                guideront toute son œuvre&nbsp;: la rigueur de l'observation et la liberté de
                la couleur.
              </p>

              <p>
                À dix-sept ans, il rejoint la France. La vie déploie ses propres compositions,
                imprévisibles, exigeantes. Pendant des décennies, Robert bâtit, entreprend,
                traverse le siècle avec l'énergie de ceux qui portent en eux plusieurs terres.
                Mais l'œil ne dort jamais. Chaque passage à Paris est un pèlerinage silencieux
                dans les galeries du huitième arrondissement, chaque exposition une conversation
                intime avec la peinture qui l'attend.
              </p>

              <p>
                Le tournant arrive à soixante-dix ans. Ce qui ressemblait à une parenthèse se
                révèle être un prélude. Robert reprend les pinceaux et ne les lâchera plus.
                D'abord dans une école de peinture locale, puis seul, des heures durant, avec
                la discipline farouche d'un homme qui sait que le temps est devenu son matériau
                le plus précieux. Il étudie Giancarlo Bargognone, dont la gestuelle italienne
                résonne avec sa propre mémoire méditerranéenne. Il explore Brian Rottenberg,
                plonge dans l'expressionnisme américain des années cinquante, absorbe tout ce
                qui vibre, tout ce qui ose.
              </p>

              <p>
                Du pastel délicat de l'adolescence, sa main évolue vers le couteau à palette.
                Le geste s'élargit, s'épaissit, se libère. Les empâtements deviennent des
                paysages en relief, les rouges incandescents surgissent de fonds noirs abyssaux
                comme la lave perçant la croûte terrestre. Ses toiles ne représentent pas le
                feu. Elles brûlent.
              </p>

              <p>
                L'abstrait, pour Robert, n'est pas une fuite vers le vague. C'est l'inverse&nbsp;:
                une confrontation directe avec l'essentiel. Là où le figuratif décrit, l'abstrait
                exige. Il faut oser le premier geste sur la toile blanche, accepter que
                l'inspiration ne se commande pas, que la matière a ses propres intentions.
              </p>

              <blockquote className="artist-quote">
                <p>Je peins jusqu'à ce que la toile me brûle les doigts</p>
              </blockquote>

              <p>
                Plus de quatre-vingts ans séparent le gamin de douze ans qui posait du pastel
                sur des portraits en chambre noire et le peintre qui attaque la toile au couteau.
                Le cercle s'est refermé avec une cohérence inattendue&nbsp;: à douze ans comme
                aujourd'hui, Robert Platania fait la même chose. Il met de la couleur là où il
                n'y en avait pas.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
