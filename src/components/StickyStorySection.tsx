import { useState, useEffect, useRef } from 'react';
import { ParallaxConfig } from '../types.ts';

interface StickyStorySectionProps {
  config: ParallaxConfig;
  theme?: 'light' | 'dark';
}

export function StickyStorySection({ config, theme = 'light' }: StickyStorySectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setScrollY(rect.top);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const effectiveParallax1 = -15 * config.multiplier;
  const effectiveParallax2 = -20 * config.multiplier;

  const offset1 = Math.max(-60, Math.min(60, scrollY * 0.05 * config.multiplier));
  const offset2 = Math.max(-80, Math.min(80, scrollY * 0.08 * config.multiplier));

  return (
    <section
      ref={containerRef}
      className={`border-y py-24 px-6 my-20 transition-colors duration-500 ${
        isLight
          ? 'bg-neutral-100 border-neutral-200 text-neutral-900'
          : 'bg-[#141414] border-white/10 text-[#f2f2f2]'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Sticky Left Column */}
        <div className="lg:sticky lg:top-32 self-start flex flex-col">
          <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-orange-500 mb-3 block">
            THE ARCHITECTURE
          </span>
          <h2
            className={`font-serif font-black text-3xl sm:text-5xl tracking-tight leading-tight mb-6 ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}
          >
            How the Weichie Parallax System Works
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed mb-10 ${
              isLight ? 'text-neutral-600' : 'text-white/60'
            }`}
          >
            Unlike crude translateY implementations that jitter and stutter, Weichie solves the core visual limitations of browser scrolling through three mathematical steps:
          </p>

          <div className="flex flex-col gap-5">
            <div
              className={`flex gap-4 p-5 rounded-2xl border transition-colors ${
                isLight ? 'bg-white border-neutral-200 shadow-2xs' : 'bg-[#1a1a1a] border-white/10'
              }`}
            >
              <span className="font-serif font-black text-2xl text-orange-500">01</span>
              <div>
                <h4
                  className={`font-bold text-base mb-1 font-serif ${
                    isLight ? 'text-neutral-900' : 'text-white'
                  }`}
                >
                  Inertial Lerp Smoothing
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
                  Smooths mousewheel impulses into an interpolated linear timeline (damping ~0.08) so refresh rates never tear.
                </p>
              </div>
            </div>

            <div
              className={`flex gap-4 p-5 rounded-2xl border transition-colors ${
                isLight ? 'bg-white border-neutral-200 shadow-2xs' : 'bg-[#1a1a1a] border-white/10'
              }`}
            >
              <span className="font-serif font-black text-2xl text-orange-500">02</span>
              <div>
                <h4
                  className={`font-bold text-base mb-1 font-serif ${
                    isLight ? 'text-neutral-900' : 'text-white'
                  }`}
                >
                  Optical Cover Scaling
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
                  The media is automatically scaled by{' '}
                  <code
                    className={`text-xs px-1 py-0.5 rounded font-mono border ${
                      isLight
                        ? 'bg-neutral-100 text-orange-600 border-neutral-300'
                        : 'bg-[#242424] text-orange-300 border-white/10'
                    }`}
                  >
                    [1 + |speed| × 0.024]
                  </code>
                  , perfectly masking inner vertical translation.
                </p>
              </div>
            </div>

            <div
              className={`flex gap-4 p-5 rounded-2xl border transition-colors ${
                isLight ? 'bg-white border-neutral-200 shadow-2xs' : 'bg-[#1a1a1a] border-white/10'
              }`}
            >
              <span className="font-serif font-black text-2xl text-orange-500">03</span>
              <div>
                <h4
                  className={`font-bold text-base mb-1 font-serif ${
                    isLight ? 'text-neutral-900' : 'text-white'
                  }`}
                >
                  Dual-Speed Grid Mechanics
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
                  Asymmetrical column velocities create true stereoscopic depth as cards pass each other on the vertical axis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="flex flex-col gap-12">
          {/* Card 1 */}
          <div
            className={`p-8 rounded-3xl border shadow-2xl flex flex-col transition-colors ${
              isLight ? 'bg-white border-neutral-200' : 'bg-[#1a1a1a] border-white/10'
            }`}
          >
            <div
              className={`relative aspect-16/10 rounded-2xl overflow-hidden mb-6 border ${
                isLight ? 'bg-neutral-100 border-neutral-200' : 'bg-[#242424] border-white/5'
              }`}
            >
              <div
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{
                  transform: `translate3d(0, ${offset1}px, 0) scale(${1 + (Math.abs(effectiveParallax1) * 2.4) / 100})`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=85"
                  alt="Precision Architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {config.showBadges && (
                <div
                  className={`absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                    isLight
                      ? 'bg-white/90 text-neutral-900 border-neutral-300'
                      : 'bg-[#0f0f0f]/90 text-orange-400 border-white/20'
                  }`}
                >
                  Parallax: {effectiveParallax1.toFixed(1)}%
                </div>
              )}
            </div>
            <h3
              className={`font-serif font-bold text-2xl mb-2 ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              Mathematical Precision
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
              Every coordinate transformation leverages GPU-accelerated matrices, keeping CPU overhead below 5% on 4K displays.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`p-8 rounded-3xl border shadow-2xl flex flex-col transition-colors ${
              isLight ? 'bg-white border-neutral-200' : 'bg-[#1a1a1a] border-white/10'
            }`}
          >
            <div
              className={`relative aspect-16/10 rounded-2xl overflow-hidden mb-6 border ${
                isLight ? 'bg-neutral-100 border-neutral-200' : 'bg-[#242424] border-white/5'
              }`}
            >
              <div
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{
                  transform: `translate3d(0, ${offset2}px, 0) scale(${1 + (Math.abs(effectiveParallax2) * 2.4) / 100})`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
                  alt="Design studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {config.showBadges && (
                <div
                  className={`absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                    isLight
                      ? 'bg-white/90 text-neutral-900 border-neutral-300'
                      : 'bg-[#0f0f0f]/90 text-orange-400 border-white/20'
                  }`}
                >
                  Parallax: {effectiveParallax2.toFixed(1)}%
                </div>
              )}
            </div>
            <h3
              className={`font-serif font-bold text-2xl mb-2 ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              Universal Compatibility
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
              Automatic fallbacks for touch devices and reduced-motion preferences, guaranteeing accessibility across every screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
