import { useEffect, useRef, useState } from 'react';
import { ParallaxConfig } from '../types.ts';
import { Sparkles } from 'lucide-react';

interface CenterpieceSectionProps {
  config: ParallaxConfig;
  theme?: 'light' | 'dark';
}

export function CenterpieceSection({ config, theme = 'light' }: CenterpieceSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const centeredDist = rect.top + rect.height / 2 - windowH / 2;
      setOffsetY(-centeredDist * 0.12 * config.multiplier);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [config.multiplier]);

  const effectiveParallax = -22 * config.multiplier;
  const scale = 1 + (Math.abs(effectiveParallax) * 2.4) / 100;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div
        ref={containerRef}
        className="relative w-full aspect-16/9 min-h-[440px] rounded-3xl overflow-hidden shadow-2xl bg-[#161616] border border-white/10"
      >
        {/* Deep Parallax Inner Media */}
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: `translate3d(0, ${offsetY}px, 0) scale(${scale})`,
            transition: config.multiplier === 0 ? 'transform 0.4s ease-out' : 'none',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
            alt="Monumental Architectural Structure"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Speed Badge */}
        {config.showBadges && (
          <div className="absolute top-6 right-6 z-20 bg-[#0f0f0f]/90 backdrop-blur-md text-orange-400 text-[10px] font-mono font-semibold px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
            Centerpiece Parallax: {effectiveParallax.toFixed(1)}%
          </div>
        )}

        {/* Dark Vignette Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0f0f0f]/95 via-black/40 to-transparent flex flex-col justify-end p-8 sm:p-16 text-white">
          <div className="inline-flex items-center gap-2 text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-orange-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>FOCAL CENTERPIECE SHOWCASE</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-6xl tracking-tighter leading-tight max-w-2xl mb-4 text-white">
            Immersion Through Monumental Form
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
            As you scroll, the deep optical velocity (-22%) creates a dimensional illusion of physical space sliding through an architectural aperture.
          </p>
        </div>
      </div>
    </section>
  );
}
