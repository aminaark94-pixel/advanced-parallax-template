import { useState, Dispatch, SetStateAction } from 'react';
import { Download, FileCode, FolderArchive, Code2, Sliders, Check, Sun, Moon, Sparkles } from 'lucide-react';
import { downloadInlineHtml, downloadModularZip, downloadSeparateFile } from '../utils/downloadHelpers.ts';
import { ViewMode, ParallaxConfig } from '../types.ts';

interface NavbarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  config: ParallaxConfig;
  setConfig: Dispatch<SetStateAction<ParallaxConfig>>;
  onOpenCodeModal: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Navbar({
  viewMode,
  setViewMode,
  config,
  setConfig,
  onOpenCodeModal,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const isLight = theme === 'light';

  const triggerDownload = (type: 'inline' | 'zip') => {
    if (type === 'inline') {
      downloadInlineHtml();
      setDownloadSuccess('Inline HTML downloaded!');
    } else {
      downloadModularZip();
      setDownloadSuccess('Modular ZIP downloaded!');
    }
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 shadow-xs ${
        isLight
          ? 'bg-white/95 text-neutral-900 border-neutral-200/80'
          : 'bg-[#0f0f0f]/95 text-[#f2f2f2] border-white/10'
      }`}
    >
      {/* Top Banner with Direct One-Click Download CTAs & Mode Toggles */}
      <div
        className={`text-xs py-1.5 px-4 border-b transition-colors duration-300 ${
          isLight
            ? 'bg-neutral-100 text-neutral-700 border-neutral-200/80'
            : 'bg-[#141414] text-white/90 border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="font-semibold tracking-[0.2em] uppercase text-[10px] font-sans">
              WEICHIE PARALLAX CLONE
            </span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="hidden sm:inline opacity-60 text-[11px] font-sans">
              Curved 3D Ribbon + Dual-Speed Parallax (1-Click Playable Code)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Primary Download CTAs */}
            <button
              id="btn-download-inline-top"
              onClick={() => triggerDownload('inline')}
              className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
              title="Download single self-contained HTML file (all inline)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download 1-File (.html)</span>
            </button>

            <button
              id="btn-download-zip-top"
              onClick={() => triggerDownload('zip')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border transition-colors cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300'
                  : 'bg-[#1f1f1f] hover:bg-[#282828] text-white border-white/10'
              }`}
              title="Download modular package: separate HTML, CSS & JS"
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Download Modular (.zip)</span>
            </button>

            {/* View Mode Toggle */}
            <div
              className={`flex items-center rounded-full p-0.5 border ${
                isLight ? 'bg-neutral-200/70 border-neutral-300' : 'bg-[#1a1a1a] border-white/10'
              }`}
            >
              <button
                onClick={() => setViewMode('experience')}
                className={`px-3 py-0.5 rounded-full text-[11px] font-sans uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'experience'
                    ? isLight
                      ? 'bg-white text-neutral-950 font-bold shadow-xs'
                      : 'bg-white text-neutral-950 font-bold'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setViewMode('standalone-iframe')}
                className={`px-3 py-0.5 rounded-full text-[11px] font-sans uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'standalone-iframe'
                    ? isLight
                      ? 'bg-white text-neutral-950 font-bold shadow-xs'
                      : 'bg-white text-neutral-950 font-bold'
                    : 'opacity-60 hover:opacity-100'
                }`}
                title="Preview the exact raw standalone HTML file inside isolated iframe"
              >
                Raw Iframe
              </button>
              <button
                onClick={onOpenCodeModal}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-sans uppercase tracking-wider opacity-60 hover:opacity-100 transition-all flex items-center gap-1 cursor-pointer"
                title="View code of all files"
              >
                <Code2 className="w-3 h-3" />
                <span>Code</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Authentic Weichie Navigation Bar (Exact Match with Screenshot) */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Authentic Brand Title */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-serif font-black text-3xl sm:text-4xl tracking-tight transition-transform duration-200 hover:scale-[1.02]"
          >
            Weichie
          </a>
        </div>

        {/* Center: Navigation Links (Work, Services, About, Insights) */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <button
            onClick={() => scrollToSection('curved-parallax-section')}
            className={`transition-colors cursor-pointer font-medium ${
              isLight ? 'text-neutral-900 hover:text-orange-600' : 'text-white hover:text-orange-400'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('architecture-story')}
            className={`transition-colors cursor-pointer font-medium ${
              isLight ? 'text-neutral-700 hover:text-orange-600' : 'text-white/80 hover:text-orange-400'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('work-grid-section')}
            className={`transition-colors cursor-pointer font-medium ${
              isLight ? 'text-neutral-700 hover:text-orange-600' : 'text-white/80 hover:text-orange-400'
            }`}
          >
            About
          </button>
          <button
            onClick={onOpenCodeModal}
            className={`transition-colors cursor-pointer font-medium ${
              isLight ? 'text-neutral-700 hover:text-orange-600' : 'text-white/80 hover:text-orange-400'
            }`}
          >
            Insights
          </button>
        </nav>

        {/* Right Navigation Controls: Get in Touch, Sun/Moon, EN */}
        <div className="flex items-center gap-3">
          {/* Live Parallax Slider for quick tuning */}
          <div
            className={`hidden xl:flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${
              isLight ? 'bg-neutral-100 border-neutral-300' : 'bg-white/5 border-white/10'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[10px] uppercase tracking-wider font-semibold opacity-60">Parallax:</span>
            {[0.5, 1.0, 1.8].map((val) => (
              <button
                key={val}
                onClick={() => setConfig((prev) => ({ ...prev, multiplier: val }))}
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors cursor-pointer ${
                  config.multiplier === val
                    ? 'bg-orange-500 text-white font-bold'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {val}x
              </button>
            ))}
          </div>

          {/* "Get in touch" Pill Button with Signature Orange Peace/Hand Icon */}
          <a
            href="mailto:hello@weichie.com"
            className={`flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full border text-xs sm:text-sm font-sans font-medium transition-all shadow-2xs hover:shadow-xs cursor-pointer group ${
              isLight
                ? 'bg-neutral-100 hover:bg-neutral-200/80 border-neutral-300 text-neutral-900'
                : 'bg-white/10 hover:bg-white/15 border-white/15 text-white'
            }`}
          >
            <span className="font-semibold">Get in touch</span>
            <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              {/* Authentic 3-finger / peace icon SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M9 11V6a2 2 0 0 1 4 0v5" />
                <path d="M13 11V4a2 2 0 0 1 4 0v7" />
                <path d="M17 11a2 2 0 0 1 4 0v4a8 8 0 0 1-16 0v-2a2 2 0 0 1 4 0v-2" />
              </svg>
            </div>
          </a>

          {/* Sun / Moon Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'bg-neutral-100 hover:bg-neutral-200/80 border-neutral-300 text-neutral-800'
                : 'bg-white/5 hover:bg-white/10 border-white/15 text-white'
            }`}
            title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
          >
            {isLight ? (
              <Sun className="w-4 h-4 text-neutral-800 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-orange-400 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Language Selector Pill */}
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold font-sans ${
              isLight
                ? 'bg-neutral-100 border-neutral-300 text-neutral-800'
                : 'bg-white/5 border-white/15 text-white'
            }`}
          >
            EN
          </div>
        </div>
      </div>

      {/* Toast Feedback */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-neutral-700 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-neutral-900 flex items-center justify-center font-bold">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{downloadSuccess} Ready to double-click and run in any browser!</span>
        </div>
      )}
    </header>
  );
}
