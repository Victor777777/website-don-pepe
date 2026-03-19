import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Robert Platania — Peintre expressionniste abstrait',
  description: 'Portfolio de Robert Platania, peintre expressionniste abstrait. Feu, lave, cosmos — 32 oeuvres en 6 series thematiques.',
  openGraph: {
    title: 'Robert Platania — Peintre expressionniste abstrait',
    description: 'Portfolio de Robert Platania. Feu, lave, cosmos — la matiere en mouvement.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <footer className="footer">
          <div className="container footer__inner">
            <span className="footer__name">Robert Platania</span>
            <span className="footer__copy">Toutes les oeuvres sont la propriete de l'artiste</span>
          </div>
        </footer>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
