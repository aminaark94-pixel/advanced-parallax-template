import { useState } from 'react';
import { Download, ExternalLink, RefreshCw, FolderArchive, ArrowLeft } from 'lucide-react';
import { downloadInlineHtml, downloadModularZip } from '../utils/downloadHelpers.ts';

interface StandalonePreviewProps {
  onBackToExperience: () => void;
}

export function StandalonePreview({ onBackToExperience }: StandalonePreviewProps) {
  const [iframeKey, setIframeKey] = useState(0);

  const refreshIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Control Banner for Iframe */}
      <div className="bg-[#161616] text-white rounded-2xl p-4 sm:p-6 mb-6 shadow-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <button
              onClick={onBackToExperience}
              className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-semibold cursor-pointer uppercase tracking-wider font-sans"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Live View</span>
            </button>
            <span className="text-white/20">/</span>
            <span className="text-xs text-white/40 font-mono">/downloads/weichie-parallax-standalone.html</span>
          </div>
          <h2 className="text-lg font-serif font-bold text-white">
            Raw Standalone File Preview (Isolated Environment)
          </h2>
          <p className="text-xs text-white/50 font-sans">
            This iframe renders the exact pure HTML+CSS+JS file without any React wrapper.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={refreshIframe}
            className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            title="Reload preview"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload</span>
          </button>

          <a
            href="/downloads/weichie-parallax-standalone.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            title="Open in standalone full browser tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in Tab</span>
          </a>

          <button
            onClick={downloadInlineHtml}
            className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .html</span>
          </button>

          <button
            onClick={downloadModularZip}
            className="flex items-center gap-1.5 bg-[#222] hover:bg-[#2a2a2a] text-white border border-white/15 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <FolderArchive className="w-3.5 h-3.5 text-orange-400" />
            <span>Download .zip</span>
          </button>
        </div>
      </div>

      {/* Embedded Iframe Container */}
      <div className="w-full h-[85vh] bg-[#0f0f0f] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
        <iframe
          key={iframeKey}
          src="/downloads/weichie-parallax-standalone.html"
          title="Standalone Parallax Preview"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}
