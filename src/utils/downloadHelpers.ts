import JSZip from 'jszip';
import { modularHtml, modularCss, modularJs, modularReadme, inlineHtml } from '../data/standaloneTemplates.ts';

/**
 * Trigger immediate client-side file download via Blob.
 * Works flawlessly in all browsers and iFrames.
 */
export function downloadBlob(filename: string, content: string | Blob, mimeType: string) {
  try {
    const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  } catch (err) {
    console.error('Download failed, falling back to static link:', err);
    // Fallback direct navigation
    window.open(`/downloads/${filename}`, '_blank');
  }
}

/**
 * Downloads the single-file inline version (weichie-parallax-standalone.html).
 */
export function downloadInlineHtml() {
  downloadBlob('weichie-parallax-standalone.html', inlineHtml, 'text/html;charset=utf-8');
}

/**
 * Downloads the complete modular package (.zip) containing index.html, style.css, script.js, and README.md.
 */
export async function downloadModularZip() {
  try {
    const zip = new JSZip();
    const folder = zip.folder('weichie-parallax-modular') || zip;
    folder.file('index.html', modularHtml);
    folder.file('style.css', modularCss);
    folder.file('script.js', modularJs);
    folder.file('README.md', modularReadme);

    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 },
    });

    downloadBlob('weichie-parallax-modular.zip', zipBlob, 'application/zip');
  } catch (err) {
    console.warn('In-memory zip generation failed, falling back to static zip asset:', err);
    const link = document.createElement('a');
    link.href = '/downloads/weichie-parallax-modular.zip';
    link.download = 'weichie-parallax-modular.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/**
 * Download individual modular files.
 */
export function downloadSeparateFile(fileKey: 'html' | 'css' | 'js' | 'readme') {
  switch (fileKey) {
    case 'html':
      downloadBlob('index.html', modularHtml, 'text/html;charset=utf-8');
      break;
    case 'css':
      downloadBlob('style.css', modularCss, 'text/css;charset=utf-8');
      break;
    case 'js':
      downloadBlob('script.js', modularJs, 'application/javascript;charset=utf-8');
      break;
    case 'readme':
      downloadBlob('README.md', modularReadme, 'text/markdown;charset=utf-8');
      break;
  }
}
