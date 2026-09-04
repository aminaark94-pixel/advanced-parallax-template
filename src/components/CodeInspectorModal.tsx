import { useState } from 'react';
import { X, Copy, Check, Download, FileCode, FolderArchive } from 'lucide-react';
import { modularHtml, modularCss, modularJs, modularReadme, inlineHtml } from '../data/standaloneTemplates.ts';
import { downloadSeparateFile, downloadInlineHtml, downloadModularZip } from '../utils/downloadHelpers.ts';

interface CodeInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FileTab = 'inline' | 'html' | 'css' | 'js' | 'readme' | 'images-guide';

const imageGuideContent = `# How to Add or Change Images in the Standalone Parallax Version

Whether you're using the all-in-one \`weichie-parallax-standalone.html\` or the modular ZIP (\`index.html\`, \`style.css\`, \`script.js\`), here is how to change or add your own images.

---

## 1. Changing Existing Images

Open \`index.html\` (or \`weichie-parallax-standalone.html\`) in any code editor (VS Code, Notepad, Sublime).

Search for \`<img\` inside the cards:

\`\`\`html
<!-- Example Card -->
<article class="card" data-cursor-card="EXPLORE">
  <div class="card-media" data-promote>
    <!-- Parallax media wrapper with data-parallax speed: -->
    <div class="card-media-inner" data-parallax="-12" data-parallax-mode="cover">
      <!-- ⬇️ CHANGE THE src HERE: -->
      <img src="https://your-image-url-or-local-path.jpg" alt="Your Project Title" class="card-image" loading="lazy">
    </div>
    <div class="card-speed-badge">Speed: -12%</div>
  </div>
  <div class="card-body">
    <span class="card-tag">YOUR CATEGORY</span>
    <h3 class="card-title">Your Project Title</h3>
    <p class="card-desc">Your description text goes here.</p>
  </div>
</article>
\`\`\`

### Option A: Using Local Images (Recommended for Standalone ZIP)
1. In your modular folder, create an \`images/\` folder (e.g., \`images/project-1.jpg\`).
2. Update the \`src\`:
   \`\`\`html
   <img src="images/project-1.jpg" alt="My Project" class="card-image">
   \`\`\`

### Option B: Using Web / CDN URLs
Use any direct HTTPS link:
\`\`\`html
<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" alt="House" class="card-image">
\`\`\`

---

## 2. Adding a Brand New Parallax Image Card

To add a new card to either column:
1. Find \`id="col-left"\` or \`id="col-right"\` inside \`<div class="work-columns">\`.
2. Paste a new \`<article class="card">\` block:

\`\`\`html
<article class="card" data-cursor-card="VIEW PROJECT">
  <div class="card-media" data-promote>
    <!-- data-parallax controls the speed: try -10, -14, -18 -->
    <div class="card-media-inner" data-parallax="-16" data-parallax-mode="cover">
      <img src="images/my-new-photo.jpg" alt="Title" class="card-image" loading="lazy">
    </div>
    <div class="card-speed-badge">Speed: -16%</div>
  </div>
  <div class="card-body">
    <span class="card-tag">BRAND IDENTITY</span>
    <h3 class="card-title">New Project Name</h3>
    <p class="card-desc">Brief editorial description.</p>
  </div>
</article>
\`\`\`

---

## 3. How to Adjust the Parallax Speed & Direction

The parallax movement is controlled automatically by the \`data-parallax\` attribute on \`.card-media-inner\`:

- \`data-parallax="-12"\` : Moves upward as you scroll down (standard smooth parallax).
- \`data-parallax="-20"\` : Stronger, deeper parallax effect.
- \`data-parallax="12"\`  : Positive values move the image in the reverse direction.
- \`data-parallax-mode="cover"\` : Automatically scales the image so it fills the mask without showing empty gaps during movement!

---

## 4. Best Image Dimensions & Formats

- **Aspect Ratio**: 4:3 or 16:10 landscape (e.g. 1200×900px or 1600×1000px).
- **Format**: Modern WebP or optimized JPG.
- **Tip**: High-contrast, architectural, product, or editorial photography works best with Weichie's mask clipping!
`;

export function CodeInspectorModal({ isOpen, onClose }: CodeInspectorModalProps) {
  const [activeTab, setActiveTab] = useState<FileTab>('inline');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fileMap: Record<FileTab, { name: string; content: string; language: string }> = {
    inline: {
      name: 'weichie-parallax-standalone.html',
      content: inlineHtml,
      language: 'html',
    },
    html: {
      name: 'modular/index.html',
      content: modularHtml,
      language: 'html',
    },
    css: {
      name: 'modular/style.css',
      content: modularCss,
      language: 'css',
    },
    js: {
      name: 'modular/script.js',
      content: modularJs,
      language: 'javascript',
    },
    readme: {
      name: 'modular/README.md',
      content: modularReadme,
      language: 'markdown',
    },
    'images-guide': {
      name: 'HOW-TO-ADD-IMAGES.md',
      content: imageGuideContent,
      language: 'markdown',
    },
  };

  const currentFile = fileMap[activeTab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = currentFile.content;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadActive = () => {
    if (activeTab === 'inline') {
      downloadInlineHtml();
    } else {
      downloadSeparateFile(activeTab as 'html' | 'css' | 'js' | 'readme');
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#141414] border border-white/10 rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-neutral-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
          <div className="flex items-center gap-3">
            <FileCode className="w-5 h-5 text-orange-400" />
            <div>
              <h3 className="text-base font-serif font-bold text-white">Standalone Code Viewer</h3>
              <p className="text-xs text-white/50 font-sans">Inspect or copy the standalone code directly</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadModularZip}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              <FolderArchive className="w-3.5 h-3.5 text-orange-400" />
              <span>Download ZIP</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Selector & Controls Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-2 bg-[#0f0f0f] border-b border-white/10 gap-3">
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setActiveTab('inline')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer uppercase tracking-wider font-sans ${
                activeTab === 'inline'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>1. Standalone (Inline)</span>
            </button>

            <div className="h-4 w-px bg-white/10 mx-1"></div>

            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer font-mono ${
                activeTab === 'html'
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              index.html
            </button>

            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer font-mono ${
                activeTab === 'css'
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              style.css
            </button>

            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer font-mono ${
                activeTab === 'js'
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              script.js
            </button>

            <button
              onClick={() => setActiveTab('readme')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer font-mono ${
                activeTab === 'readme'
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              README.md
            </button>

            <button
              onClick={() => setActiveTab('images-guide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer font-mono flex items-center gap-1.5 ${
                activeTab === 'images-guide'
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                  : 'text-orange-400/70 hover:text-orange-300 hover:bg-orange-500/10'
              }`}
            >
              <span>🖼️ Image Guide</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white/80 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>

            <button
              onClick={handleDownloadActive}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="flex-1 p-6 overflow-auto font-mono text-xs text-neutral-300 leading-relaxed bg-[#0d0d0d] selection:bg-orange-600/40">
          <pre className="whitespace-pre overflow-x-auto">
            <code>{currentFile.content}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-900 flex items-center justify-between text-xs text-neutral-400">
          <div>
            Viewing: <span className="text-white font-mono">{currentFile.name}</span>
          </div>
          <div className="text-[11px] text-neutral-500">
            One-click playable in browser without React or node.
          </div>
        </div>
      </div>
    </div>
  );
}
