# CLAUDE.md — Website Don Pepe (Robert Platania)

## Projet

Site web portfolio pour **Robert Platania**, peintre expressionniste abstrait.
Le site est une vitrine artistique — pas de e-commerce. L'objectif est de présenter les œuvres, raconter l'artiste, et permettre le contact (galeries, acheteurs potentiels, proches).

> Le nom de code du projet est "Don Pepe" en interne. Le site public affiche "Robert Platania".

---

## Stack technique

- **Framework** : Next.js (static export via `output: 'export'`) + React
- **Hébergement** : Vercel (auto-deploy on push, projet distinct de tout autre projet)
- **Repo** : GitHub `website-don-pepe` (séparé de tout autre repo)
- **Design skills** : voir le dossier `skills/` (taste-skill, soft-skill, minimalist-skill, redesign-skill, output-skill)

---

## Design System

### Philosophie

Le site est conçu comme une **galerie d'art sombre** — fond noir profond où les toiles brillent comme des sources de lumière. L'énergie primordiale de Platania (feu, lave, cosmos) guide chaque choix visuel. Pas de décoration superflue : la peinture est le héros.

### Palette de couleurs

| Rôle | Couleur | Hex |
|------|---------|-----|
| Fond profond | Noir chaud | `#0D0A08` |
| Surface sombre | Brun-noir | `#1A1410` |
| Accent principal | Rouge lave | `#C4310A` |
| Accent secondaire | Or solaire | `#E8A020` |
| Accent froid | Bleu profond | `#1B5FA8` |
| Accent nature | Vert forêt | `#2D6B3C` |
| Texte principal | Crème | `#F5EDE0` |
| Texte secondaire | Gris chaud | `#8A7A6A` |
| Texte tertiaire | Brun foncé | `#5A4A3A` |

- Le **rouge lave `#C4310A`** est la couleur signature — utilisée pour les accents, survols, titres de séries, liens actifs.
- L'**or solaire `#E8A020`** pour les highlights, badges, éléments spéciaux.
- Les couleurs froides (bleu, vert) sont réservées aux séries thématiques correspondantes, jamais en accent global.

### Typographie

| Usage | Police | Style |
|-------|--------|-------|
| Titres, nom de l'artiste | **Cormorant Garamond** | Serif classique, élégant, éditorial |
| Corps de texte, navigation | **DM Sans** | Sans-serif sobre, lisible, neutre |
| Numéros de catalogue | **Monospace** (DM Mono ou équivalent) | Pour les N°XX des œuvres |

- Titres : espacement large (letter-spacing: 0.1–0.15em), majuscules pour le nom
- Corps : taille 14–16px, interligne confortable
- Navigation : petite taille (11–13px), espacement large, majuscules

### Principes UI

- **Espacement généreux** — laisser respirer les œuvres
- **Pas d'ombres portées** — bordures subtiles rgba(255,255,255,0.05) maximum
- **Hover** : léger changement de fond (#1A1208), jamais de zoom agressif
- **Transitions** : douces, 0.2–0.3s
- **Coins arrondis** : 6–8px pour les cartes, pas plus
- **Mobile-first** : la galerie passe en colonne unique sur mobile

---

## Catalogue des œuvres — 32 peintures en 6 séries

### 🔥 Feu & Lave (7 œuvres)

| N° | Titre | Description courte |
|----|-------|--------------------|
| 60 | Magma | Coulée volcanique, lave en fusion sur fond noir |
| 59 | Coulée II | Lave en mouvement, reflets or |
| 56 | Fumée et braise | Orange brûlé, cendres, anthracite |
| 62 | Explosion solaire | Feu ardent jaillissant de la nuit |
| 50 | Nocturne rouge | Profond, rouge sang, nuit absolue |
| 49 | Rideau cramoisi | Drapé de rouge, masse sombre |
| 16 | Strates | Couches géologiques incandescentes |

### ⚡ Tempête & Chaos (5 œuvres)

| N° | Titre | Description courte |
|----|-------|--------------------|
| 44 | La tempête | Déchaînement atmosphérique |
| 57 | Apocalypse I | Diptique — partie gauche |
| 58 | Apocalypse II | Diptique — partie droite |
| 43 | Horizon en feu | Ligne d'horizon embrasée |
| 39 | Nuit de feu | Nuit percée de lueurs ardentes |

### ✦ Cosmos & Nuit (5 œuvres)

| N° | Titre | Description courte |
|----|-------|--------------------|
| 4  | Le phénix | Oiseau de feu renaissant |
| 3  | Koi nocturne | Forme organique dans la nuit |
| 26 | Vortex | Spirale cosmique |
| 47 | Galaxie | Nébuleuse de couleurs |
| 40 | Big Bang | Explosion originelle |

### 🌊 Eau & Lumière (5 œuvres)

| N° | Titre | Description courte |
|----|-------|--------------------|
| 52 | Profondeur bleue | Abysses, bleu intense |
| 51 | Soleil sur mer | Lumière dorée sur l'eau |
| 2  | Confluent | Rencontre de courants |
| 11 | Désert bleu | Étendue bleue austère |
| 9  | Solstice | Lumière au zénith |

### 🌲 Nature & Forêt (5 œuvres)

| N° | Titre | Description courte |
|----|-------|--------------------|
| 28 | Sylve | Forêt dense et mystérieuse |
| 29 | Forêt ardente | Sous-bois en feu |
| 19 | La source | Jaillissement naturel |
| 13 | Bouquet d'or | Explosion florale dorée |
| 7  | Jardin cosmique | Nature et cosmos mêlés |

### 🎨 Éclats & Joie (5 œuvres)

| N° | Titre | Description courte |
|----|-------|--------------------|
| 31 | Éruption primaire | Couleurs primaires en explosion |
| 32 | Les montagnes | Reliefs colorés |
| 46 | Fête des prés | Couleurs vives, célébration |
| 38 | Joie primaire | Rouge, jaune, vert, bleu |
| 64 | Architecture dorée | ⭐ PIÈCE ATYPIQUE — fond blanc, structure géométrique, couleurs contenues |

> **Note sur N°64 "Architecture dorée"** : Cette toile est radicalement différente du reste de l'œuvre. Fond blanc, lignes géométriques, palette retenue. Elle doit être mise en avant sur le site comme pièce rare montrant la diversité de Platania. Envisager un traitement visuel distinct (par ex. fond clair local, encadré spécial).

---

## Structure du site

### Pages

1. **Accueil** — Une toile plein écran en hero, nom "ROBERT PLATANIA" en grand (Cormorant Garamond), courte accroche poétique, CTA vers la galerie
2. **Galerie** — Grille des 34 œuvres, filtrable par série thématique (6 filtres). Chaque œuvre : image, numéro, titre, série. Clic = vue agrandie (lightbox ou page dédiée)
3. **À propos** — Biographie de l'artiste, démarche artistique, photo de Robert, éventuellement photos en atelier
4. **Contact** — Formulaire simple (nom, email, message), email direct, liens réseaux si applicable

### Navigation

- Barre de navigation fixe en haut, sobre, fond transparent qui se solidifie au scroll
- Liens : Œuvres · À propos · Contact
- Logo/nom à gauche en petites capitales

---

## Style de l'artiste (contexte pour la rédaction)

Robert Platania est un **expressionniste abstrait gestuel**. Sa technique repose sur :
- **Empâtement épais** (heavy impasto) — la matière se voit, se sent
- **Travail au couteau à palette** — gestes larges, textures rugueuses
- **Palette dominée par le feu** — rouges, oranges, ors, sur fonds noirs profonds
- **Thèmes récurrents** : feu, lave, cosmos, forêts nocturnes, océan, forces primordiales
- Proche de **de Kooning** et **Soulages**, mais avec une chaleur méditerranéenne

~80% des œuvres sont dominées par les tons feu et nuit.

---

## Fichiers images

Les photos des 34 toiles seront placées dans un dossier `public/paintings/` (ou équivalent selon le framework).
Convention de nommage : `{numero}-{slug}.jpg` — ex: `60-magma.jpg`, `64-architecture-doree.jpg`

---

## Skills de design

Quand tu construis le frontend, **lis et suis les règles** dans le dossier `skills/` :
- `skills/taste-skill.md`
- `skills/soft-skill.md`
- `skills/minimalist-skill.md`
- `skills/redesign-skill.md`
- `skills/output-skill.md`

Ces fichiers contiennent des règles de design (typographie, espacement, couleurs, composants) à appliquer systématiquement.

---

## TODO (à confirmer avec Victor)

- [ ] Langue du site : français uniquement ou bilingue FR/EN ?
- [ ] Prix des œuvres : à afficher ou site purement vitrine ?
- [ ] Citation / phrase de l'artiste pour l'accueil ?
- [ ] Photo de Robert Platania pour la page "À propos" ?
- [ ] Nom de domaine envisagé ?
