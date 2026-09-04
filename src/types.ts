export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  baseParallax: number; // e.g. -12, -18
  column: 'left' | 'right';
  actionText: string;
}

export type ViewMode = 'experience' | 'inspector' | 'standalone-iframe';

export interface ParallaxConfig {
  multiplier: number; // 0 (off), 0.5, 1.0, 1.5, 2.0
  smoothScroll: boolean;
  showBadges: boolean;
}
