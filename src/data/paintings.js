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
  { id: 60, title: 'Magma', slug: 'magma', series: 'feu-lave', description: 'Coulée volcanique, lave en fusion sur fond noir', dimensions: '100 × 100', year: 2025, medium: 'Acrylique sur toile' },
  { id: 59, title: 'Coulée II', slug: 'coulee-ii', series: 'feu-lave', description: 'Lave en mouvement, reflets or', dimensions: '130 × 100', year: 2024, medium: 'Acrylique sur toile' },
  { id: 56, title: 'Fumée et braise', slug: 'fumee-et-braise', series: 'feu-lave', description: 'Orange brûlé, cendres, anthracite', dimensions: '100 × 100', year: 2024, medium: 'Acrylique sur toile' },
  { id: 62, title: 'Explosion solaire', slug: 'explosion-solaire', series: 'feu-lave', description: 'Feu ardent jaillissant de la nuit', dimensions: '90 × 90', year: 2024, medium: 'Acrylique sur toile' },
  { id: 50, title: 'Nocturne rouge', slug: 'nocturne-rouge', series: 'feu-lave', description: 'Profond, rouge sang, nuit absolue', dimensions: '113 × 75', year: 2022, medium: 'Acrylique sur toile' },
  { id: 49, title: 'Rideau cramoisi', slug: 'rideau-cramoisi', series: 'feu-lave', description: 'Drapé de rouge, masse sombre', dimensions: '130 × 100', year: 2023, medium: 'Acrylique sur toile' },
  { id: 16, title: 'Strates', slug: 'strates', series: 'feu-lave', description: 'Couches géologiques incandescentes', dimensions: '130 × 100', year: 2024, medium: 'Acrylique sur toile' },

  // Tempête & Chaos
  { id: 44, title: 'La tempête', slug: 'la-tempete', series: 'tempete-chaos', description: 'Déchaînement atmosphérique', dimensions: '100 × 100', year: 2022, medium: 'Acrylique sur toile' },
  { id: 57, title: 'Apocalypse I', slug: 'apocalypse-i', series: 'tempete-chaos', description: 'Diptique, partie gauche', diptych: 'apocalypse', dimensions: '100 × 100', year: 2024, medium: 'Acrylique sur toile' },
  { id: 58, title: 'Apocalypse II', slug: 'apocalypse-ii', series: 'tempete-chaos', description: 'Diptique, partie droite', diptych: 'apocalypse', dimensions: '100 × 100', year: 2024, medium: 'Acrylique sur toile' },
  { id: 43, title: 'Horizon en feu', slug: 'horizon-en-feu', series: 'tempete-chaos', description: 'Ligne d\'horizon embrasée', dimensions: '100 × 80', year: 2022, medium: 'Acrylique sur toile' },
  { id: 39, title: 'Nuit de feu', slug: 'nuit-de-feu', series: 'tempete-chaos', description: 'Nuit percée de lueurs ardentes', dimensions: '130 × 100', year: 2020, medium: 'Acrylique sur toile' },

  // Cosmos & Nuit
  { id: 4, title: 'Le phénix', slug: 'le-phenix', series: 'cosmos-nuit', description: 'Oiseau de feu renaissant', dimensions: '100 × 100', year: 2025, medium: 'Acrylique sur toile' },
  { id: 3, title: 'Koi nocturne', slug: 'koi-nocturne', series: 'cosmos-nuit', description: 'Forme organique dans la nuit', dimensions: '130 × 100', year: 2015, medium: 'Acrylique sur toile' },
  { id: 26, title: 'Vortex', slug: 'vortex', series: 'cosmos-nuit', description: 'Spirale cosmique', dimensions: '100 × 100', year: 2024, medium: 'Acrylique sur toile' },
  { id: 47, title: 'Galaxie', slug: 'galaxie', series: 'cosmos-nuit', description: 'Nébuleuse de couleurs', dimensions: '130 × 100', year: 2023, medium: 'Acrylique sur toile' },
  { id: 40, title: 'Big Bang', slug: 'big-bang', series: 'cosmos-nuit', description: 'Explosion originelle', dimensions: '100 × 100', year: 2015, medium: 'Acrylique sur toile' },

  // Eau & Lumière
  { id: 52, title: 'Profondeur bleue', slug: 'profondeur-bleue', series: 'eau-lumiere', description: 'Abysses, bleu intense', dimensions: '100 × 100', year: 2025, medium: 'Acrylique sur toile' },
  { id: 51, title: 'Soleil sur mer', slug: 'soleil-sur-mer', series: 'eau-lumiere', description: 'Lumière dorée sur l\'eau', dimensions: '100 × 100', year: 2022, medium: 'Acrylique sur toile' },
  { id: 2, title: 'Confluent', slug: 'confluent', series: 'eau-lumiere', description: 'Rencontre de courants', dimensions: '130 × 100', year: 2015, medium: 'Acrylique sur toile' },
  { id: 11, title: 'Désert bleu', slug: 'desert-bleu', series: 'eau-lumiere', description: 'Étendue bleue austère', dimensions: '115 × 90', year: 2014, medium: 'Acrylique sur toile' },
  { id: 9, title: 'Solstice', slug: 'solstice', series: 'eau-lumiere', description: 'Lumière au zénith', dimensions: '130 × 100', year: 2014, medium: 'Acrylique sur toile' },

  // Nature & Forêt
  { id: 28, title: 'Sylve', slug: 'sylve', series: 'nature-foret', description: 'Forêt dense et mystérieuse', dimensions: '130 × 100', year: 2014, medium: 'Acrylique sur toile' },
  { id: 29, title: 'Forêt ardente', slug: 'foret-ardente', series: 'nature-foret', description: 'Sous-bois en feu', dimensions: '115 × 90', year: 2012, medium: 'Acrylique sur toile' },
  { id: 19, title: 'La source', slug: 'la-source', series: 'nature-foret', description: 'Jaillissement naturel', dimensions: '100 × 100', year: 2013, medium: 'Acrylique sur toile' },
  { id: 13, title: 'Bouquet d\'or', slug: 'bouquet-d-or', series: 'nature-foret', description: 'Explosion florale dorée', dimensions: '130 × 100', year: 2014, medium: 'Acrylique sur toile' },
  { id: 7, title: 'Jardin cosmique', slug: 'jardin-cosmique', series: 'nature-foret', description: 'Nature et cosmos mêlés', dimensions: '130 × 100', year: 2014, medium: 'Acrylique sur toile' },

  // Éclats & Joie
  { id: 31, title: 'Éruption primaire', slug: 'eruption-primaire', series: 'eclats-joie', description: 'Couleurs primaires en explosion', dimensions: '150 × 120', year: 2013, medium: 'Acrylique sur toile' },
  { id: 32, title: 'Les montagnes', slug: 'les-montagnes', series: 'eclats-joie', description: 'Reliefs colorés', dimensions: '100 × 100', year: 2023, medium: 'Acrylique sur toile' },
  { id: 46, title: 'Fête des prés', slug: 'fete-des-pres', series: 'eclats-joie', description: 'Couleurs vives, célébration', dimensions: '150 × 120', year: 2015, medium: 'Acrylique sur toile' },
  { id: 38, title: 'Joie primaire', slug: 'joie-primaire', series: 'eclats-joie', description: 'Rouge, jaune, vert, bleu', dimensions: '100 × 100', year: 2012, medium: 'Acrylique sur toile' },
  { id: 64, title: 'Architecture dorée', slug: 'architecture-doree', series: 'eclats-joie', description: 'Structure géométrique, couleurs contenues', atypical: true, dimensions: '90 × 90', year: 2024, medium: 'Huile sur toile' },
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
