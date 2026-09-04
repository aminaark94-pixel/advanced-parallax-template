export interface CarouselCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  accentColor: string;
  bgGradient: string;
  cardType: 'taco' | 'furniture' | 'beer' | 'architecture' | 'configurator' | 'tensile';
  previewImage: string;
  tags: string[];
  description: string;
}

export const carouselProjects: CarouselCard[] = [
  {
    id: 'les-tontons',
    title: 'Les Tontons',
    subtitle: 'Taco Messiah',
    category: 'Branding & E-Commerce',
    client: 'Les Tontons Brussels',
    year: '2025',
    accentColor: '#10b981',
    bgGradient: 'from-[#062416] via-[#0b3320] to-[#041a10]',
    cardType: 'taco',
    previewImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85',
    tags: ['Identity', 'Web Design', 'Packaging', 'Three.js'],
    description: 'A cult street-food brand identity and digital ordering experience bursting with Mexican folk art, hand-drawn typography, and playful character animations.',
  },
  {
    id: 'van-proet',
    title: 'Van Proet',
    subtitle: 'Thuis in unieke meubelcollecties',
    category: 'Architecture & Living',
    client: 'Van Proet Studio',
    year: '2024',
    accentColor: '#f97316',
    bgGradient: 'from-[#e5ded6] via-[#f3eeea] to-[#dad1c7]',
    cardType: 'furniture',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    tags: ['E-Commerce', 'Interior Design', 'Digital Showroom'],
    description: 'High-end architectural furniture showroom platform showcasing bespoke interior and exterior collections with minimal browser-frame UI.',
  },
  {
    id: 'tout-bien',
    title: 'TOUT BIEN',
    subtitle: 'Belgian Pils, Rouge & 0.0',
    category: 'Beverage & FMCG',
    client: 'Tout Bien Brewery',
    year: '2025',
    accentColor: '#ef4444',
    bgGradient: 'from-[#e8dfcf] via-[#f7f3ec] to-[#ded3be]',
    cardType: 'beer',
    previewImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=85',
    tags: ['Product Launch', 'Micro-Interactions', 'Shopify Plus'],
    description: 'Summer beachside digital storefront for the iconic Belgian pilsner brand, featuring trio colorway interactive cans and effortless ordering.',
  },
  {
    id: 'adaptive-green',
    title: 'Adaptive Green',
    subtitle: 'Urban Microclimates & Living Roofs',
    category: 'Ecological Engineering',
    client: 'Adaptive Green New York',
    year: '2024',
    accentColor: '#22c55e',
    bgGradient: 'from-[#dcdbd9] via-[#ebeae8] to-[#cfcecc]',
    cardType: 'architecture',
    previewImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    tags: ['Web Application', '3D Modeling', 'Carbon Metrics'],
    description: 'Interactive portfolio and telemetry dashboard for carbon-negative urban greenery, sedum roof infrastructure, and botanical architecture.',
  },
  {
    id: 'alushop-3d',
    title: 'Alushop Configurator',
    subtitle: 'Realtime 3D Architectural Systems',
    category: 'WebGL 3D Application',
    client: 'Alushop Belgium',
    year: '2026',
    accentColor: '#3b82f6',
    bgGradient: 'from-[#1e293b] via-[#0f172a] to-[#020617]',
    cardType: 'configurator',
    previewImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    tags: ['Three.js', 'Parametric CAD', 'Instant Quoting'],
    description: 'One-of-a-kind WebGL 3D architectural facade and canopy configurator with instantaneous price calculation and dimension inspection.',
  },
  {
    id: 'spantech',
    title: 'Spantech Structures',
    subtitle: 'Tensile Venues & Summit Pavilions',
    category: 'Spatial Architecture',
    client: 'Spantech Global',
    year: '2025',
    accentColor: '#eab308',
    bgGradient: 'from-[#27272a] via-[#18181b] to-[#09090b]',
    cardType: 'tensile',
    previewImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    tags: ['Interactive Maps', 'Modular Architecture', 'B2B Portal'],
    description: 'Grand digital platform for rapid deployable architectural venues and high-performance membrane structures used across European summits.',
  },
];
