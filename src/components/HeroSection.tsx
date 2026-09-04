import { Download, FolderArchive, ArrowDown, Sparkles } from 'lucide-react';
import { downloadInlineHtml, downloadModularZip } from '../utils/downloadHelpers.ts';

interface HeroSectionProps {
  onScrollToWork: () => void;
  theme?: 'light' | 'dark';
}

export function HeroSection({ onScrollToWork, theme = 'light' }: HeroSectionProps) {
  const isLight = theme === 'light';

  return (
    <section
      className={`relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden transition-colors duration-500 ${
        isLight ? 'bg-neutral-50 text-neutral-900' : 'bg-[#0f0f0f] text-[#f2f2f2]'
      }`}
    >
      {/* Editorial Decorative Architectural Blocks from Theme */}
      <div className="absolute top-[5%] left-[4%] w-[420px] h-[520px] bg-[#161616] border border-white/5 opacity-50 pointer-events-none hidden xl:block z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
      </div>

      <div className="absolute bottom-[8%] right-[4%] w-[320px] h-[380px] bg-[#1a1a1a] border border-white/10 z-10 hidden xl:flex flex-col p-6 shadow-2xl transform rotate-2 pointer-events-none">
        <div className="flex-1 bg-[#222] border border-white/5 mb-4 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center text-white/10 text-3xl font-sans tracking-[0.3em]">
            WEICHIE_LAB
          </div>
          <div className="absolute inset-0 bg-radial from-orange-500/15 via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="text-[9px] uppercase tracking-[0.25em] text-orange-400 font-sans mb-1 text-left">
          Core Engine
        </div>
        <div className="text-base text-left text-white/90 font-serif leading-tight">
          Optical Cover Mechanics & Lerp
        </div>
      </div>

      {/* Left Rotated Editorial Tag */}
      <div className="absolute left-8 bottom-32 origin-left -rotate-90 text-[9px] uppercase tracking-[0.5em] text-white/20 font-sans whitespace-nowrap pointer-events-none hidden lg:block select-none">
        CRAFTING DIGITAL EXPERIENCES • SINCE 2012
      </div>

      {/* Right Editorial Section Track */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 items-center pointer-events-none hidden lg:flex select-none">
        <div className="w-0.5 h-16 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2/3 bg-orange-500"></div>
        </div>
        <div className="text-[10px] text-white/40 font-sans tracking-widest rotate-90 my-2">01</div>
        <div className="w-0.5 h-16 bg-white/5"></div>
      </div>

      {/* Center Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        {/* Category Eyebrow Pill */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-1.5 border rounded-full text-[9px] uppercase tracking-[0.3em] font-sans mb-8 backdrop-blur-xs ${
            isLight
              ? 'border-neutral-300 bg-white text-neutral-700 shadow-2xs'
              : 'border-white/20 bg-white/5 text-white/70'
          }`}
        >
          <Sparkles className="w-3 h-3 text-orange-500" />
          <span>Independent Creative Studio — Parallax Engine</span>
        </div>

        {/* Hero Title with Outlined Stroke Effect */}
        <h1
          className={`font-serif font-black text-6xl sm:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.88] mb-8 select-none ${
            isLight ? 'text-neutral-900' : 'text-white'
          }`}
        >
          <span className="block">BEYOND</span>
          <span
            className="block italic font-light"
            style={{
              color: 'transparent',
              WebkitTextStroke: isLight ? '1.5px rgba(23, 23, 23, 0.85)' : '1.5px rgba(255, 255, 255, 0.9)',
            }}
          >
            SURFACE
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p
          className={`max-w-xl text-xs sm:text-sm font-sans tracking-[0.15em] uppercase leading-relaxed mb-10 ${
            isLight ? 'text-neutral-600' : 'text-white/50'
          }`}
        >
          We challenge the ordinary through thoughtful interaction and liquid parallax storytelling. Two 1-click standalone versions ready to download and run anywhere.
        </p>

        {/* Direct Download Action Strip */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <button
            onClick={downloadInlineHtml}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download All-In-One (.html)</span>
          </button>

          <button
            onClick={downloadModularZip}
            className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest border transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-neutral-100 text-neutral-900 border-neutral-300'
                : 'bg-[#1a1a1a] hover:bg-[#252525] text-white border-white/15'
            }`}
          >
            <FolderArchive className="w-4 h-4 text-orange-500" />
            <span>Download Modular (.zip)</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onScrollToWork}
          className={`flex flex-col items-center gap-3 transition-colors group cursor-pointer ${
            isLight ? 'text-neutral-400 hover:text-neutral-900' : 'text-white/40 hover:text-white'
          }`}
        >
          <div
            className={`w-5 h-9 rounded-full border flex justify-center pt-2 transition-colors ${
              isLight
                ? 'border-neutral-300 group-hover:border-neutral-900'
                : 'border-white/30 group-hover:border-white'
            }`}
          >
            <div className="w-1 h-2 rounded-full bg-orange-500 group-hover:bg-neutral-900 animate-bounce" />
          </div>
          <span
            className={`text-[10px] font-sans tracking-[0.3em] uppercase ${
              isLight ? 'text-neutral-500 group-hover:text-neutral-900' : 'text-white/40 group-hover:text-white/80'
            }`}
          >
            Scroll to Explore Parallax
          </span>
        </button>
      </div>
    </section>
  );
}

