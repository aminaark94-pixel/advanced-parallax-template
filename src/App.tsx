/**
 * Weichie Parallax Effect Showcase App
 * Reproducing the smooth parallax scrolling and curved 3D carousel of Weichie.com
 * Provides 1-click playable standalone downloads (Inline & Modular).
 */

import { useState } from 'react';
import { ViewMode, ParallaxConfig } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Curved3DCarousel } from './components/Curved3DCarousel.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ParallaxGrid } from './components/ParallaxGrid.tsx';
import { StickyStorySection } from './components/StickyStorySection.tsx';
import { CenterpieceSection } from './components/CenterpieceSection.tsx';
import { Footer } from './components/Footer.tsx';
import { StandalonePreview } from './components/StandalonePreview.tsx';
import { CodeInspectorModal } from './components/CodeInspectorModal.tsx';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('experience');
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [parallaxConfig, setParallaxConfig] = useState<ParallaxConfig>({
    multiplier: 1.0,
    smoothScroll: true,
    showBadges: true,
  });

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  const scrollToWork = () => {
    const el = document.getElementById('work-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 selection:bg-orange-500 selection:text-white relative ${
        isLight ? 'bg-[#fafafa] text-neutral-900' : 'bg-[#0f0f0f] text-[#f2f2f2]'
      }`}
    >
      {/* Interactive Custom Cursor */}
      <CustomCursor label={cursorLabel} />

      {/* Header & Controls Navigation Bar */}
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        config={parallaxConfig}
        setConfig={setParallaxConfig}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main View Area */}
      <main>
        {viewMode === 'experience' ? (
          <>
            {/* Curved 3D Cylindrical Scroll Parallax (Signature Weichie Showcase) */}
            <Curved3DCarousel
              config={parallaxConfig}
              theme={theme}
              onHoverCard={setCursorLabel}
            />

            {/* Hero Architectural Section */}
            <HeroSection onScrollToWork={scrollToWork} theme={theme} />

            {/* Asymmetrical Parallax Cards Grid (Signature Weichie 2-Column Layout) */}
            <ParallaxGrid
              config={parallaxConfig}
              onHoverCard={setCursorLabel}
              theme={theme}
            />

            {/* Sticky Split Storytelling Section */}
            <StickyStorySection config={parallaxConfig} theme={theme} />

            {/* Deep Parallax Centerpiece Monument */}
            <CenterpieceSection config={parallaxConfig} theme={theme} />

            {/* Architectural Studio Footer */}
            <Footer theme={theme} />
          </>
        ) : (
          /* Isolated Standalone Iframe Preview */
          <StandalonePreview onBackToExperience={() => setViewMode('experience')} />
        )}
      </main>

      {/* Code Inspector Modal */}
      <CodeInspectorModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />
    </div>
  );
}
