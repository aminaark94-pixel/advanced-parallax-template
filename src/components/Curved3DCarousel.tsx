import { useState, useRef, useEffect, useCallback, MouseEvent, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, MoveHorizontal, RotateCw, ExternalLink } from 'lucide-react';
import { carouselProjects, CarouselCard } from '../data/carouselProjects.ts';
import { CarouselCardMockup } from './CarouselCardMockup.tsx';
import { ParallaxConfig } from '../types.ts';

interface Curved3DCarouselProps {
  config: ParallaxConfig;
  theme: 'light' | 'dark';
  onHoverCard?: (label: string | null) => void;
}

export function Curved3DCarousel({ config, theme, onHoverCard }: Curved3DCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>(2); // Start centered on TOUT BIEN (index 2)
  const [currentOffset, setCurrentOffset] = useState<number>(2);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragStartOffset, setDragStartOffset] = useState<number>(2);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const requestRef = useRef<number>(0);
  const targetOffsetRef = useRef<number>(2);
  const currentOffsetRef = useRef<number>(2);
  targetOffsetRef.current = targetOffset;
  currentOffsetRef.current = currentOffset;

  // Lerp physics loop for buttery 60fps interpolation
  useEffect(() => {
    let lastTime = performance.now();

    const updatePhysics = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Auto rotation if enabled and user not interacting
      if (autoRotate && !isDragging && !isHovering) {
        setTargetOffset((prev) => (prev + dt * 0.25) % carouselProjects.length);
      }

      // Inertial damping lerp: currentOffset moves smoothly towards targetOffset
      const diff = targetOffsetRef.current - currentOffsetRef.current;
      if (Math.abs(diff) > 0.0005) {
        const next = currentOffsetRef.current + diff * 0.12 * config.multiplier;
        setCurrentOffset(next);
      }

      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    requestRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(requestRef.current);
  }, [autoRotate, isDragging, isHovering, config.multiplier]);

  // Page Scroll Parallax Integration:
  // As the user scrolls vertically down the page, gently advance the 3D cylinder
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Subtle scroll drift
      if (Math.abs(scrollDelta) > 0 && !isDragging) {
        setTargetOffset((prev) => {
          const delta = scrollDelta * 0.0018 * config.multiplier;
          return Math.max(-0.5, Math.min(carouselProjects.length - 0.5, prev + delta));
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDragging, config.multiplier]);

  // Horizontal MouseWheel Support
  const handleWheel = useCallback((e: WheelEvent) => {
    // If scrolling sideways or holding shift or vertical wheel over carousel
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      e.preventDefault();
      const step = (e.deltaX || e.deltaY) * 0.002;
      setTargetOffset((prev) => {
        const next = prev + step;
        return Math.max(-0.5, Math.min(carouselProjects.length - 0.5, next));
      });
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Mouse & Touch Dragging Handlers
  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartOffset(currentOffsetRef.current);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    // Remap drag pixels to card indices (~440px per card)
    const cardStep = 440;
    const next = dragStartOffset - deltaX / cardStep;
    setTargetOffset(Math.max(-0.5, Math.min(carouselProjects.length - 0.5, next)));
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to closest integer card index
    setTargetOffset((prev) => Math.round(Math.max(0, Math.min(carouselProjects.length - 1, prev))));
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartOffset(currentOffsetRef.current);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    const cardStep = 360;
    const next = dragStartOffset - deltaX / cardStep;
    setTargetOffset(Math.max(-0.5, Math.min(carouselProjects.length - 0.5, next)));
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setTargetOffset((prev) => Math.round(Math.max(0, Math.min(carouselProjects.length - 1, prev))));
  };

  const goToCard = (index: number) => {
    setTargetOffset(index);
  };

  const nextCard = () => {
    setTargetOffset((prev) => Math.min(carouselProjects.length - 1, Math.round(prev) + 1));
  };

  const prevCard = () => {
    setTargetOffset((prev) => Math.max(0, Math.round(prev) - 1));
  };

  // Currently centered card
  const activeIndex = Math.max(0, Math.min(carouselProjects.length - 1, Math.round(currentOffset)));
  const activeProject = carouselProjects[activeIndex];

  const isLight = theme === 'light';

  return (
    <section
      ref={containerRef}
      id="curved-parallax-section"
      className={`relative w-full overflow-hidden transition-colors duration-500 pt-8 pb-16 sm:pb-24 select-none ${
        isLight ? 'bg-white text-neutral-900' : 'bg-[#0f0f0f] text-[#f2f2f2]'
      }`}
      onMouseEnter={() => {
        setIsHovering(true);
        if (onHoverCard) onHoverCard('DRAG / GLIDE');
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        if (isDragging) handleMouseUp();
        if (onHoverCard) onHoverCard(null);
      }}
    >
      {/* Top Header Label */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-orange-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIGNATURE 3D CYLINDRICAL PARALLAX</span>
          </div>
          <h2 className="font-serif font-black text-2xl sm:text-4xl tracking-tight">
            Curved Project Showcase
          </h2>
        </div>

        {/* Live Parallax Badge & Navigation Buttons */}
        <div className="flex items-center gap-3">
          {config.showBadges && (
            <div
              className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono border ${
                isLight ? 'bg-neutral-100 border-neutral-300 text-neutral-700' : 'bg-white/5 border-white/10 text-orange-400'
              }`}
            >
              <MoveHorizontal className="w-3.5 h-3.5" />
              <span>Offset: {currentOffset.toFixed(2)} | Radius: 1300px</span>
            </div>
          )}

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevCard}
              disabled={targetOffset <= 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                targetOffset <= 0
                  ? 'opacity-30 cursor-not-allowed border-transparent'
                  : isLight
                  ? 'border-neutral-300 hover:border-neutral-900 bg-white shadow-xs'
                  : 'border-white/15 hover:border-orange-500 bg-white/5'
              }`}
              title="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextCard}
              disabled={targetOffset >= carouselProjects.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                targetOffset >= carouselProjects.length - 1
                  ? 'opacity-30 cursor-not-allowed border-transparent'
                  : isLight
                  ? 'border-neutral-300 hover:border-neutral-900 bg-white shadow-xs'
                  : 'border-white/15 hover:border-orange-500 bg-white/5'
              }`}
              title="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 3D Cylinder Stage */}
      <div
        className="relative w-full h-[480px] sm:h-[580px] lg:h-[640px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 48%',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 3D Curved Track */}
        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {carouselProjects.map((card, i) => {
            const diff = i - currentOffset;
            // Arc curvature calculations
            // Cards on left rotate outward positive, cards on right rotate negative to form concave bowl
            const rotateY = -diff * 23;
            // Recede along Z axis to create true cylindrical depth
            const translateZ = -Math.pow(Math.abs(diff), 1.25) * 95;
            // Responsive card stride
            const cardWidth = 440;
            const translateX = diff * cardWidth;
            // Subtle scale diminution on periphery
            const scale = Math.max(0.72, 1 - Math.abs(diff) * 0.05);
            // Dynamic opacity & zIndex
            const opacity = Math.max(0.2, 1 - Math.abs(diff) * 0.22);
            const zIndex = Math.round(100 - Math.abs(diff) * 10);
            const isCenter = Math.abs(diff) < 0.5;

            // Inner media parallax: shifts slightly within the window opposite to rotation
            const innerMediaParallax = diff * 32 * config.multiplier;

            return (
              <div
                key={card.id}
                onClick={() => goToCard(i)}
                className="absolute top-1/2 left-1/2 w-[300px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-[360px] sm:h-[440px] md:h-[490px] -mt-[180px] sm:-mt-[220px] md:-mt-[245px] -ml-[150px] sm:-ml-[190px] md:-ml-[210px] lg:-ml-[230px] rounded-[28px] sm:rounded-[34px] cursor-pointer will-change-transform transition-shadow duration-300 pointer-events-auto"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  boxShadow: isCenter
                    ? isLight
                      ? '0 30px 60px -15px rgba(0,0,0,0.18), 0 10px 25px -10px rgba(0,0,0,0.12)'
                      : '0 30px 60px -15px rgba(0,0,0,0.7), 0 0 35px rgba(249,115,22,0.15)'
                    : '0 20px 40px -15px rgba(0,0,0,0.12)',
                }}
              >
                {/* Outer Card Shell with Crisp Editorial Border */}
                <div
                  className={`w-full h-full rounded-[28px] sm:rounded-[34px] overflow-hidden border relative ${
                    isLight ? 'border-neutral-300/80 bg-neutral-100' : 'border-white/15 bg-[#161616]'
                  }`}
                >
                  {/* Inner Content with Horizontal Parallax Drift */}
                  <div
                    className="w-full h-full will-change-transform"
                    style={{
                      transform: `translateX(${innerMediaParallax}px)`,
                    }}
                  >
                    <CarouselCardMockup card={card} isCenter={isCenter} />
                  </div>

                  {/* Corner Badge */}
                  {config.showBadges && (
                    <div
                      className={`absolute top-4 right-4 z-30 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full border shadow-xs ${
                        isLight
                          ? 'bg-white/90 text-neutral-800 border-neutral-300'
                          : 'bg-black/80 text-orange-400 border-white/20'
                      }`}
                    >
                      rotY: {rotateY.toFixed(1)}°
                    </div>
                  )}
                </div>

                {/* Mirror Floor Reflection (Signature Feature from Screenshot!) */}
                <div
                  className="absolute top-full left-0 w-full h-[120px] sm:h-[160px] mt-4 rounded-[28px] sm:rounded-[34px] overflow-hidden pointer-events-none opacity-25 select-none"
                  style={{
                    transform: 'scaleY(-1)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 40%, transparent 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 40%, transparent 80%)',
                    filter: 'blur(1px)',
                  }}
                >
                  <div className="w-full h-full opacity-60">
                    <CarouselCardMockup card={card} isCenter={false} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Metadata & Active Project Banner */}
      <div className="max-w-7xl mx-auto px-6 mt-4 sm:mt-8">
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
            isLight ? 'bg-neutral-50 border-neutral-200/90 shadow-sm' : 'bg-[#141414] border-white/10'
          }`}
        >
          <div className="flex flex-col gap-1 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-orange-500">
                {activeProject.client} • {activeProject.year}
              </span>
              <span className="text-xs opacity-30">/</span>
              <span className="text-xs font-medium opacity-60">{activeProject.category}</span>
            </div>

            <h3 className="font-serif font-black text-2xl sm:text-3xl tracking-tight mt-1">
              {activeProject.title} — <span className="opacity-70 font-sans font-normal text-xl sm:text-2xl">{activeProject.subtitle}</span>
            </h3>

            <p className="text-sm opacity-70 mt-1 leading-relaxed">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] font-sans font-medium px-3 py-1 rounded-full border ${
                    isLight
                      ? 'bg-white text-neutral-700 border-neutral-200'
                      : 'bg-white/5 text-white/70 border-white/10'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Scrub Dots & Explore Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
            {/* Project Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {carouselProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => goToCard(idx)}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? 'w-8 bg-orange-500'
                      : isLight
                      ? 'w-2 bg-neutral-300 hover:bg-neutral-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  title={p.title}
                />
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('work-grid-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer"
            >
              <span>Explore Work</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
