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

Toutes les peintures sont à l'**acrylique sur toile**, sauf N°64 qui est à l'**huile sur toile**. Dimensions en cm (largeur × hauteur).

### 🔥 Feu & Lave (7 œuvres)

| N° | Titre | Dimensions (cm) | Année | Technique |
|----|-------|-----------------|-------|-----------|
| 60 | Magma | 100 × 100 | 2025 | Acrylique |
| 59 | Coulée II | 130 × 100 | 2024 | Acrylique |
| 56 | Fumée et braise | 100 × 100 | 2024 | Acrylique |
| 62 | Explosion solaire | 90 × 90 | 2024 | Acrylique |
| 50 | Nocturne rouge | 113 × 75 | 2022 | Acrylique |
| 49 | Rideau cramoisi | 130 × 100 | 2023 | Acrylique |
| 16 | Strates | 130 × 100 | 2024 | Acrylique |

### ⚡ Tempête & Chaos (5 œuvres)

| N° | Titre | Dimensions (cm) | Année | Technique |
|----|-------|-----------------|-------|-----------|
| 44 | La tempête | 100 × 100 | 2022 | Acrylique |
| 57 | Apocalypse I | 100 × 100 | 2024 | Acrylique |
| 58 | Apocalypse II | 100 × 100 | 2024 | Acrylique |
| 43 | Horizon en feu | 100 × 80 | 2022 | Acrylique |
| 39 | Nuit de feu | 130 × 100 | 2020 | Acrylique |

### ✦ Cosmos & Nuit (5 œuvres)

| N° | Titre | Dimensions (cm) | Année | Technique |
|----|-------|-----------------|-------|-----------|
| 4  | Le phénix | 100 × 100 | 2025 | Acrylique |
| 3  | Koi nocturne | 130 × 100 | 2015 | Acrylique |
| 26 | Vortex | 100 × 100 | 2024 | Acrylique |
| 47 | Galaxie | 130 × 100 | 2023 | Acrylique |
| 40 | Big Bang | 100 × 100 | 2015 | Acrylique |

### 🌊 Eau & Lumière (5 œuvres)

| N° | Titre | Dimensions (cm) | Année | Technique |
|----|-------|-----------------|-------|-----------|
| 52 | Profondeur bleue | 100 × 100 | 2025 | Acrylique |
| 51 | Soleil sur mer | 100 × 100 | 2022 | Acrylique |
| 2  | Confluent | 130 × 100 | 2015 | Acrylique |
| 11 | Désert bleu | 115 × 90 | 2014 | Acrylique |
| 9  | Solstice | 130 × 100 | 2014 | Acrylique |

### 🌲 Nature & Forêt (5 œuvres)

| N° | Titre | Dimensions (cm) | Année | Technique |
|----|-------|-----------------|-------|-----------|
| 28 | Sylve | 130 × 100 | 2014 | Acrylique |
| 29 | Forêt ardente | 115 × 90 | 2012 | Acrylique |
| 19 | La source | 100 × 100 | 2013 | Acrylique |
| 13 | Bouquet d'or | 130 × 100 | 2014 | Acrylique |
| 7  | Jardin cosmique | 130 × 100 | 2014 | Acrylique |

### 🎨 Éclats & Joie (5 œuvres)

| N° | Titre | Dimensions (cm) | Année | Technique |
|----|-------|-----------------|-------|-----------|
| 31 | Éruption primaire | 150 × 120 | 2013 | Acrylique |
| 32 | Les montagnes | 100 × 100 | 2023 | Acrylique |
| 46 | Fête des prés | 150 × 120 | 2015 | Acrylique |
| 38 | Joie primaire | 100 × 100 | 2012 | Acrylique |
| 64 | Architecture dorée | 90 × 90 | 2024 | ⭐ Huile |

> **Note sur N°64 "Architecture dorée"** : Seule huile sur toile du catalogue. Fond blanc, lignes géométriques, palette retenue. Pièce atypique montrant la diversité de Platania. Traitement visuel distinct sur le site (fond clair, encadré spécial).

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
