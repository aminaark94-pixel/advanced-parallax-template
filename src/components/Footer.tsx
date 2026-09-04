import { Download, FolderArchive, ArrowUp, ArrowUpRight } from 'lucide-react';
import { downloadInlineHtml, downloadModularZip } from '../utils/downloadHelpers.ts';

interface FooterProps {
  theme?: 'light' | 'dark';
}

export function Footer({ theme = 'light' }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLight = theme === 'light';

  return (
    <footer
      className={`pt-24 pb-12 px-6 border-t transition-colors duration-500 ${
        isLight
          ? 'bg-neutral-100 text-neutral-900 border-neutral-200'
          : 'bg-[#0f0f0f] text-[#f2f2f2] border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Split: Code downloads */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-16 border-b ${
            isLight ? 'border-neutral-300' : 'border-white/10'
          }`}
        >
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-orange-500 uppercase mb-3 block">
              GET THE CODE
            </span>
            <h3
              className={`font-serif font-black text-3xl sm:text-5xl tracking-tighter leading-tight max-w-xl mb-4 ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              Playable Parallax in One Click
            </h3>
            <p
              className={`text-xs sm:text-sm font-sans tracking-wide max-w-md leading-relaxed uppercase ${
                isLight ? 'text-neutral-600' : 'text-white/50'
              }`}
            >
              Two clean versions ready for deployment, prototyping, or portfolio building. Double-click to run on any machine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={downloadInlineHtml}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-orange-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download 1-File (.html)</span>
            </button>

            <button
              onClick={downloadModularZip}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-neutral-200 text-neutral-900 border-neutral-300'
                  : 'bg-[#1a1a1a] hover:bg-[#252525] text-white border-white/15'
              }`}
            >
              <FolderArchive className="w-4 h-4 text-orange-500" />
              <span>Download Modular (.zip)</span>
            </button>
          </div>
        </div>

        {/* Middle Section: Editorial Studio Identity (From Theme) */}
        <div
          className={`py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b ${
            isLight ? 'border-neutral-200' : 'border-white/5'
          }`}
        >
          <div className="flex flex-wrap gap-12 sm:gap-20 font-sans">
            <div className="flex flex-col gap-1.5">
              <span className={`text-[9px] uppercase tracking-[0.25em] ${isLight ? 'text-neutral-400' : 'text-white/30'}`}>
                HQ
              </span>
              <span className={`text-xs font-medium tracking-wider ${isLight ? 'text-neutral-800' : 'text-white/80'}`}>
                Antwerp, Belgium
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={`text-[9px] uppercase tracking-[0.25em] ${isLight ? 'text-neutral-400' : 'text-white/30'}`}>
                Get in Touch
              </span>
              <span className={`text-xs font-medium tracking-wider ${isLight ? 'text-neutral-800' : 'text-white/80'}`}>
                hello@weichie.com
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={`text-[9px] uppercase tracking-[0.25em] ${isLight ? 'text-neutral-400' : 'text-white/30'}`}>
                Studio DNA
              </span>
              <span className={`text-xs font-medium tracking-wider ${isLight ? 'text-neutral-800' : 'text-white/80'}`}>
                Since 2012
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-[0.35em] font-sans font-bold text-orange-500">
              Start a Project
            </span>
            <div
              onClick={() => {
                window.location.href = 'mailto:hello@weichie.com';
              }}
              className={`w-14 h-14 rounded-full border hover:border-orange-500 hover:text-orange-500 flex items-center justify-center cursor-pointer transition-all duration-300 group ${
                isLight ? 'border-neutral-300' : 'border-white/15'
              }`}
              title="Contact studio"
            >
              <ArrowUpRight className={`w-5 h-5 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isLight ? 'text-neutral-800' : 'text-white/70'}`} />
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Credits */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs font-sans ${
            isLight ? 'text-neutral-500' : 'text-white/40'
          }`}
        >
          <div>
            © 2026 Weichie Parallax Reproduction. Inspired by the architectural web design studio Weichie.com.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                isLight ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/50 hover:text-white'
              }`}
            >
              <span className="uppercase tracking-widest text-[10px]">Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

