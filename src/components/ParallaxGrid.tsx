import { useEffect, useRef, useState, useCallback, MouseEvent } from 'react';
import { ProjectItem, ParallaxConfig } from '../types.ts';
import { projectsData } from '../data/projectsData.ts';

interface ParallaxGridProps {
  config: ParallaxConfig;
  onHoverCard: (label: string | null) => void;
  theme?: 'light' | 'dark';
}

export function ParallaxGrid({ config, onHoverCard, theme = 'light' }: ParallaxGridProps) {
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [scrollProgressMap, setScrollProgressMap] = useState<Record<string, number>>({});
  const isLight = theme === 'light';

  // Real-time scroll listener computing exact viewport progress for each card
  const updateCardParallax = useCallback(() => {
    const windowH = window.innerHeight;
    const newProgress: Record<string, number> = {};

    cardRefs.current.forEach((el, id) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Total scroll range from element just entering bottom of screen to element fully exiting top
      const totalDist = windowH + rect.height;
      const currentDist = windowH - rect.top;
      // Normalized progress from 0 (at bottom entrance) to 1 (at top exit)
      const rawProgress = currentDist / totalDist;
      // Remap to -1 to +1 centered when card is in the middle of viewport
      const centeredProgress = (rawProgress - 0.5) * 2;
      newProgress[id] = Math.max(-1.5, Math.min(1.5, centeredProgress));
    });

    setScrollProgressMap(newProgress);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateCardParallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateCardParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [updateCardParallax]);

  const leftColumnProjects = projectsData.filter((p) => p.column === 'left');
  const rightColumnProjects = projectsData.filter((p) => p.column === 'right');

  return (
    <section id="work-grid-section" className="max-w-7xl mx-auto px-6 py-24">
      {/* Section Title Header */}
      <div
        className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b transition-colors ${
          isLight ? 'border-neutral-200' : 'border-white/10'
        }`}
      >
        <div>
          <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-orange-500 uppercase mb-3 block">
            SELECTED WORKS
          </span>
          <h2
            className={`font-serif font-black text-4xl sm:text-6xl tracking-tighter ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}
          >
            Portfolio Showcase
          </h2>
        </div>
        <p
          className={`max-w-md text-xs sm:text-sm font-sans tracking-wide uppercase leading-relaxed ${
            isLight ? 'text-neutral-500' : 'text-white/50'
          }`}
        >
          Asymmetrical column velocities (-12% vs -18%) create physical parallax depth, with responsive mask clipping and sub-pixel Lerp smoothing.
        </p>
      </div>

      {/* Signature Asymmetric 2-Column Staggered Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column (Standard baseline) */}
        <div className="flex flex-col gap-20">
          {leftColumnProjects.map((project) => (
            <ParallaxCard
              key={project.id}
              project={project}
              progress={scrollProgressMap[project.id] ?? 0}
              config={config}
              onHoverCard={onHoverCard}
              theme={theme}
              setRef={(el) => {
                if (el) cardRefs.current.set(project.id, el);
                else cardRefs.current.delete(project.id);
              }}
            />
          ))}
        </div>

        {/* Right Column (Staggered offset downward on desktop for organic asymmetry) */}
        <div className="flex flex-col gap-20 md:mt-32">
          {rightColumnProjects.map((project) => (
            <ParallaxCard
              key={project.id}
              project={project}
              progress={scrollProgressMap[project.id] ?? 0}
              config={config}
              onHoverCard={onHoverCard}
              theme={theme}
              setRef={(el) => {
                if (el) cardRefs.current.set(project.id, el);
                else cardRefs.current.delete(project.id);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ParallaxCardProps {
  key?: string;
  project: ProjectItem;
  progress: number;
  config: ParallaxConfig;
  onHoverCard: (label: string | null) => void;
  setRef: (el: HTMLDivElement | null) => void;
  theme?: 'light' | 'dark';
}

function ParallaxCard({ project, progress, config, onHoverCard, setRef, theme = 'light' }: ParallaxCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isLight = theme === 'light';

  // Calculate dynamic parallax offset according to Weichie formula:
  // scale = 1 + abs(parallax) * 2.4 / 100
  const effectiveParallax = project.baseParallax * config.multiplier;
  const scale = 1 + (Math.abs(effectiveParallax) * 2.4) / 100;
  
  // yPercent transforms vertically from +parallax to -parallax as user scrolls through
  const yPercent = -progress * effectiveParallax;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: -y * 6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    onHoverCard(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverCard(project.actionText);
  };

  return (
    <article
      ref={setRef}
      className="flex flex-col group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Outer Card Media Clipping Mask (overflow-hidden) */}
      <div
        className={`relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
          isLight
            ? 'bg-neutral-100 border border-neutral-300/80 group-hover:border-neutral-900'
            : 'bg-[#161616] border border-white/10 group-hover:border-white/20'
        }`}
        style={{
          perspective: '1000px',
        }}
      >
        {/* Tilt Container */}
        <div
          className="w-full h-full relative transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          }}
        >
          {/* Inner Media Container executing the Weichie Cover Parallax */}
          <div
            className="absolute inset-0 w-full h-full will-change-transform"
            style={{
              transform: `translate3d(0, ${yPercent}%, 0) scale(${scale})`,
              transition: config.multiplier === 0 ? 'transform 0.4s ease-out' : 'none',
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>

          {/* Speed Indicator Badge */}
          {config.showBadges && (
            <div
              className={`absolute top-4 right-4 z-10 text-[10px] font-mono font-semibold px-3 py-1 rounded-full border shadow-xs pointer-events-none ${
                isLight
                  ? 'bg-white/90 text-neutral-900 border-neutral-300'
                  : 'bg-[#0f0f0f]/90 text-orange-400 border-white/20'
              }`}
            >
              Parallax: {effectiveParallax.toFixed(1)}%
            </div>
          )}

          {/* Bottom subtle shadow gradient */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Card Metadata & Body */}
      <div className="pt-6 flex flex-col">
        <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-orange-500 mb-2">
          {project.category}
        </span>
        <h3
          className={`font-serif font-bold text-2xl sm:text-3xl tracking-tight mb-2 transition-colors ${
            isLight
              ? 'text-neutral-900 group-hover:text-orange-600'
              : 'text-white group-hover:text-orange-400'
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm sm:text-base leading-relaxed max-w-xl ${
            isLight ? 'text-neutral-600' : 'text-white/60'
          }`}
        >
          {project.description}
        </p>
      </div>
    </article>
  );
}
