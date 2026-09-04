import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { modularHtml, modularCss, modularJs, modularReadme, inlineHtml } from '../src/data/standaloneTemplates.ts';

async function buildDownloads() {
  const publicDir = path.resolve(process.cwd(), 'public');
  const downloadsDir = path.join(publicDir, 'downloads');
  const modularDir = path.join(downloadsDir, 'modular');

  // Ensure directories exist
  fs.mkdirSync(modularDir, { recursive: true });

  // 1. Write separate modular files
  fs.writeFileSync(path.join(modularDir, 'index.html'), modularHtml, 'utf8');
  fs.writeFileSync(path.join(modularDir, 'style.css'), modularCss, 'utf8');
  fs.writeFileSync(path.join(modularDir, 'script.js'), modularJs, 'utf8');
  fs.writeFileSync(path.join(modularDir, 'README.md'), modularReadme, 'utf8');
  console.log('Written modular files to', modularDir);

  // 2. Write all-in-one standalone file
  const inlinePath = path.join(downloadsDir, 'weichie-parallax-standalone.html');
  fs.writeFileSync(inlinePath, inlineHtml, 'utf8');
  console.log('Written standalone inline HTML to', inlinePath);

  // 3. Create zip package for modular files
  const zip = new JSZip();
  const folder = zip.folder('weichie-parallax-modular');
  if (folder) {
    folder.file('index.html', modularHtml);
    folder.file('style.css', modularCss);
    folder.file('script.js', modularJs);
    folder.file('README.md', modularReadme);
  }

  const zipBuffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });

  const zipPath = path.join(downloadsDir, 'weichie-parallax-modular.zip');
  fs.writeFileSync(zipPath, zipBuffer);
  console.log('Generated ZIP archive at', zipPath, `(${zipBuffer.length} bytes)`);
}

buildDownloads().catch(console.error);
