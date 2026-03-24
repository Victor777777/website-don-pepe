export const series = [
  { id: 'all', name: 'Toutes', color: '#C4310A' },
  { id: 'feu-lave', name: 'Feu & Lave', color: '#C4310A' },
  { id: 'tempete-chaos', name: 'Tempête & Chaos', color: '#C4310A' },
  { id: 'cosmos-nuit', name: 'Cosmos & Nuit', color: '#E8A020' },
  { id: 'eau-lumiere', name: 'Eau & Lumière', color: '#1B5FA8' },
  { id: 'nature-foret', name: 'Nature & Forêt', color: '#2D6B3C' },
  { id: 'eclats-joie', name: 'Éclats & Joie', color: '#E8A020' },
];

export const paintings = [
  // Feu & Lave
  { id: 60, title: 'Magma', slug: 'magma', series: 'feu-lave', description: 'Coulée volcanique, lave en fusion sur fond noir' },
  { id: 59, title: 'Coulée II', slug: 'coulee-ii', series: 'feu-lave', description: 'Lave en mouvement, reflets or' },
  { id: 56, title: 'Fumée et braise', slug: 'fumee-et-braise', series: 'feu-lave', description: 'Orange brûlé, cendres, anthracite' },
  { id: 62, title: 'Explosion solaire', slug: 'explosion-solaire', series: 'feu-lave', description: 'Feu ardent jaillissant de la nuit' },
  { id: 50, title: 'Nocturne rouge', slug: 'nocturne-rouge', series: 'feu-lave', description: 'Profond, rouge sang, nuit absolue' },
  { id: 49, title: 'Rideau cramoisi', slug: 'rideau-cramoisi', series: 'feu-lave', description: 'Drapé de rouge, masse sombre' },
  { id: 16, title: 'Strates', slug: 'strates', series: 'feu-lave', description: 'Couches géologiques incandescentes' },

  // Tempête & Chaos
  { id: 44, title: 'La tempête', slug: 'la-tempete', series: 'tempete-chaos', description: 'Déchaînement atmosphérique' },
  { id: 57, title: 'Apocalypse I', slug: 'apocalypse-i', series: 'tempete-chaos', description: 'Diptique, partie gauche', diptych: 'apocalypse' },
  { id: 58, title: 'Apocalypse II', slug: 'apocalypse-ii', series: 'tempete-chaos', description: 'Diptique, partie droite', diptych: 'apocalypse' },
  { id: 43, title: 'Horizon en feu', slug: 'horizon-en-feu', series: 'tempete-chaos', description: 'Ligne d\'horizon embrasée' },
  { id: 39, title: 'Nuit de feu', slug: 'nuit-de-feu', series: 'tempete-chaos', description: 'Nuit percée de lueurs ardentes' },

  // Cosmos & Nuit
  { id: 4, title: 'Le phénix', slug: 'le-phenix', series: 'cosmos-nuit', description: 'Oiseau de feu renaissant' },
  { id: 3, title: 'Koi nocturne', slug: 'koi-nocturne', series: 'cosmos-nuit', description: 'Forme organique dans la nuit' },
  { id: 26, title: 'Vortex', slug: 'vortex', series: 'cosmos-nuit', description: 'Spirale cosmique' },
  { id: 47, title: 'Galaxie', slug: 'galaxie', series: 'cosmos-nuit', description: 'Nébuleuse de couleurs' },
  { id: 40, title: 'Big Bang', slug: 'big-bang', series: 'cosmos-nuit', description: 'Explosion originelle' },

  // Eau & Lumière
  { id: 52, title: 'Profondeur bleue', slug: 'profondeur-bleue', series: 'eau-lumiere', description: 'Abysses, bleu intense' },
  { id: 51, title: 'Soleil sur mer', slug: 'soleil-sur-mer', series: 'eau-lumiere', description: 'Lumière dorée sur l\'eau' },
  { id: 2, title: 'Confluent', slug: 'confluent', series: 'eau-lumiere', description: 'Rencontre de courants' },
  { id: 11, title: 'Désert bleu', slug: 'desert-bleu', series: 'eau-lumiere', description: 'Étendue bleue austère' },
  { id: 9, title: 'Solstice', slug: 'solstice', series: 'eau-lumiere', description: 'Lumière au zénith' },

  // Nature & Forêt
  { id: 28, title: 'Sylve', slug: 'sylve', series: 'nature-foret', description: 'Forêt dense et mystérieuse' },
  { id: 29, title: 'Forêt ardente', slug: 'foret-ardente', series: 'nature-foret', description: 'Sous-bois en feu' },
  { id: 19, title: 'La source', slug: 'la-source', series: 'nature-foret', description: 'Jaillissement naturel' },
  { id: 13, title: 'Bouquet d\'or', slug: 'bouquet-d-or', series: 'nature-foret', description: 'Explosion florale dorée' },
  { id: 7, title: 'Jardin cosmique', slug: 'jardin-cosmique', series: 'nature-foret', description: 'Nature et cosmos mêlés' },

  // Éclats & Joie
  { id: 31, title: 'Éruption primaire', slug: 'eruption-primaire', series: 'eclats-joie', description: 'Couleurs primaires en explosion' },
  { id: 32, title: 'Les montagnes', slug: 'les-montagnes', series: 'eclats-joie', description: 'Reliefs colorés' },
  { id: 46, title: 'Fête des prés', slug: 'fete-des-pres', series: 'eclats-joie', description: 'Couleurs vives, célébration' },
  { id: 38, title: 'Joie primaire', slug: 'joie-primaire', series: 'eclats-joie', description: 'Rouge, jaune, vert, bleu' },
  { id: 64, title: 'Architecture dorée', slug: 'architecture-doree', series: 'eclats-joie', description: 'Structure géométrique, couleurs contenues', atypical: true },
];

export function getSeriesName(seriesId) {
  const s = series.find(s => s.id === seriesId);
  return s ? s.name : seriesId;
}

export function getSeriesColor(seriesId) {
  const s = series.find(s => s.id === seriesId);
  return s ? s.color : '#C4310A';
}

export function getPaintingImage(slug, type = 'main') {
  if (type === 'thumb') return `/paintings/${slug.includes('-') ? slug : slug}-thumb.jpg`;
  if (type === 'context') return `/paintings/${slug.includes('-') ? slug : slug}-context.jpg`;
  return `/paintings/${slug.includes('-') ? slug : slug}.jpg`;
}

export function getPaintingPath(painting) {
  return `/paintings/${painting.id}-${painting.slug}`;
}
