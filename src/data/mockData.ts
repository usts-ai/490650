export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Cuisines', href: '#services-cuisines' },
      { label: 'Salles de bains', href: '#services-sdb' },
    ],
  },
  { label: 'Matériaux', href: '#materiaux' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Références', href: '#references' },
  { label: 'Boutique', href: '#boutique' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    id: 'cuisines',
    title: 'Cuisines sur mesure',
    description:
      'Plans de travail, crédences et îlots en marbre ou pierre naturelle, découpes précises et finitions premium.',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
    tag: 'Cuisines',
  },
  {
    id: 'sdb',
    title: 'Salles de bains',
    description:
      'Douches, vasques et habillages muraux pour un espace spa durable, élégant et facile d\'entretien.',
    image:
      'https://images.unsplash.com/photo-1620626011761-99631759893e?auto=format&fit=crop&w=900&q=80',
    tag: 'Salles de bains',
  },
  {
    id: 'escaliers',
    title: 'Escaliers et sols',
    description:
      'Marches, contremarches et dallages grand format pour valoriser vos volumes intérieurs.',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80',
    tag: 'Aménagement',
  },
];

export const materials = [
  {
    name: 'Marbre Calacatta',
    origin: 'Italie',
    finish: 'Poli miroir',
    image:
      'https://images.unsplash.com/photo-1615876230445-0ab694de1dae?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Granit Noir Zimbabwe',
    origin: 'Afrique',
    finish: 'Leather',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Quartzite Taj Mahal',
    origin: 'Bresil',
    finish: 'Satine',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Pierre de Bourgogne',
    origin: 'France',
    finish: 'Brosse',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
  },
];

export const realisations = [
  {
    title: 'Villa contemporaine - Lyon',
    category: 'Cuisine',
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8cfe?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Suite parentale - Bordeaux',
    category: 'Salle de bain',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Showroom luxe - Paris',
    category: 'Revetement',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hotel boutique - Nice',
    category: 'Reception',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
];

export const references = [
  { name: 'Architectes partenaires', value: 48, suffix: '+' },
  { name: 'Projets livrés', value: 320, suffix: '+' },
  { name: 'Années d\'expérience', value: 25, suffix: '' },
  { name: 'Clients satisfaits', value: 98, suffix: '%' },
];

export const testimonials = [
  {
    quote:
      'Un travail d\'une précision remarquable. Notre cuisine en marbre est devenue la pièce maîtresse de la maison.',
    author: 'Sophie M.',
    role: 'Particulier - Grenoble',
  },
  {
    quote:
      'Équipe réactive, conseils matériaux pertinents et respect des délais sur un projet hôtelier exigeant.',
    author: 'Thomas L.',
    role: 'Directeur travaux',
  },
];

export const boutiqueProducts = [
  {
    name: 'Planche à découper marbre',
    price: '89 EUR',
    image:
      'https://images.unsplash.com/photo-1615876230445-0ab694de1dae?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Soucoupe pierre naturelle',
    price: '45 EUR',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Dessous de plat granit',
    price: '62 EUR',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80',
  },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
];
