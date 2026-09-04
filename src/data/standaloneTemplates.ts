/**
 * Standalone templates for the Weichie-style parallax effect.
 * Both modular (HTML + CSS + JS) and all-in-one inline versions.
 */

export const modularHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weichie Parallax Effect — One-Click Standalone</title>
  
  <!-- Typography (Google Fonts: Syne & Plus Jakarta Sans) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Custom Cursor Follower -->
  <div class="cursor" id="cursor">
    <span class="cursor-text" id="cursor-text">EXPLORE</span>
  </div>

  <!-- Header Navigation -->
  <header class="site-header">
    <div class="header-container">
      <a href="#" class="logo">
        <span class="logo-bold">WEICHIE</span>
        <span class="logo-sub">STUDIO</span>
      </a>
      <div class="header-badge">
        <span class="pulse-dot"></span>
        <span>BRUSSELS & NEW YORK</span>
      </div>
      <nav class="nav">
        <a href="#work" class="nav-link">SELECTED WORK</a>
        <a href="#about" class="nav-link">APPROACH</a>
        <a href="#contact" class="nav-btn">GET IN TOUCH</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero Section with Floating Parallax Elements -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-tag">DIGITAL ARCHITECTURE & IMMERSIVE DESIGN</div>
        <h1 class="hero-title">
          CRAFTING DIGITAL <br>
          <span class="outline-text">SPACES</span> THAT MOVE
        </h1>
        <p class="hero-desc">
          Experience liquid, inertial scrolling synchronized with dual-speed cover parallax windows. As seen on Weichie.com.
        </p>
        <div class="hero-scroll-indicator">
          <div class="scroll-track">
            <div class="scroll-thumb"></div>
          </div>
          <span>SCROLL TO EXPLORE PARALLAX</span>
        </div>
      </div>
    </section>

    <!-- Selected Work: Signature Weichie Dual-Speed Asymmetrical Parallax Grid -->
    <section class="work-section" id="work">
      <div class="section-header">
        <div>
          <span class="section-badge">PORTFOLIO</span>
          <h2 class="section-title">Selected Works</h2>
        </div>
        <p class="section-subtitle">
          Notice how the left and right columns glide at alternating velocities (-12% vs -18%), while internal media masks expand and scrub dynamically.
        </p>
      </div>

      <div class="work-grid">
        <!-- Column 1 (Left - Moving at Velocity A) -->
        <div class="work-column" id="col-left">
          <!-- Card 1 -->
          <article class="card" data-cursor-card="VIEW CASE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-12" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" alt="Adaptive Green Architecture" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -12%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">WEB DEVELOPMENT & 3D</span>
              <h3 class="card-title">Adaptive Green</h3>
              <p class="card-desc">Leaders in Carbon Negative Green Infrastructure & Climate Positive Architectural Systems.</p>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="card" data-cursor-card="EXPLORE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-14" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85" alt="Modular Pavilions" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -14%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">SPATIAL ENGINEERING</span>
              <h3 class="card-title">Viewbox Modular</h3>
              <p class="card-desc">Modular structural solutions blending industrial efficiency with tailored museum-grade aesthetics.</p>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="card" data-cursor-card="INSPECT">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-12" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85" alt="Geometric Glass Facade" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -12%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">ECOMMERCE PLATFORM</span>
              <h3 class="card-title">Nordic Pavilion</h3>
              <p class="card-desc">High-speed e-commerce infrastructure engineered for international contemporary furnishings.</p>
            </div>
          </article>
        </div>

        <!-- Column 2 (Right - Moving at Velocity B with Offset) -->
        <div class="work-column col-offset" id="col-right">
          <!-- Card 4 -->
          <article class="card" data-cursor-card="VIEW CASE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-18" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85" alt="Minimalist Concrete House" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -18%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">INTERACTIVE BRANDING</span>
              <h3 class="card-title">Spantech Structures</h3>
              <p class="card-desc">Rapid deployable temporary architectural venues built for global festivals and diplomatic summits.</p>
            </div>
          </article>

          <!-- Card 5 -->
          <article class="card" data-cursor-card="DISCOVER">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-16" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85" alt="Modern Sustainable Residence" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -16%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">DIGITAL CAMPAIGN</span>
              <h3 class="card-title">Mechelen Feest</h3>
              <p class="card-desc">City-wide summer festival platform coordinating performances, interactive maps, and live visitor flows.</p>
            </div>
          </article>

          <!-- Card 6 -->
          <article class="card" data-cursor-card="VIEW CASE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-18" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Architectural Studio Interior" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -18%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">EXPERIENCE DESIGN</span>
              <h3 class="card-title">Horizon Atelier</h3>
              <p class="card-desc">Virtual gallery spaces and interactive architectural walkthroughs rendered in real-time WebGL.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Sticky Split-Scroll Parallax Section -->
    <section class="sticky-section" id="about">
      <div class="sticky-container">
        <!-- Sticky Pin Column -->
        <div class="sticky-pin">
          <span class="section-badge">METHODOLOGY</span>
          <h2 class="sticky-title">How the Weichie Parallax System Works</h2>
          <p class="sticky-desc">
            Unlike cheap CSS translateY jitter, Weichie unifies three distinct mathematical layers:
          </p>
          <ul class="sticky-points">
            <li class="point-item active">
              <span class="point-num">01</span>
              <div>
                <strong>Inertial Lerp Smoothing</strong>
                <p>Smooths mousewheel inputs using virtual damping so frames never stutter.</p>
              </div>
            </li>
            <li class="point-item">
              <span class="point-num">02</span>
              <div>
                <strong>Optical Cover Mode</strong>
                <p>Inner media is pre-scaled by [1 + abs(speed) * 0.024], preventing blank borders.</p>
              </div>
            </li>
            <li class="point-item">
              <span class="point-num">03</span>
              <div>
                <strong>Asymmetrical Offset Speeds</strong>
                <p>Columns scroll at divergent rates to create realistic optical parallax depth.</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Scrolling Content Column -->
        <div class="sticky-scroll">
          <div class="feature-box">
            <div class="feature-media" data-promote>
              <div class="feature-media-inner" data-parallax="-15" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=85" alt="Engineering precision" class="feature-image">
              </div>
            </div>
            <h4>Smooth Precision</h4>
            <p>Every pixel calculation uses requestAnimationFrame and GSAP's optimized ticker.</p>
          </div>

          <div class="feature-box">
            <div class="feature-media" data-promote>
              <div class="feature-media-inner" data-parallax="-20" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85" alt="Design workspace" class="feature-image">
              </div>
            </div>
            <h4>Hardware Accelerated</h4>
            <p>Runs strictly via transform3d (GPU composite layers) for consistent 60+ FPS performance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Deep Parallax Centerpiece Showcase -->
    <section class="centerpiece-section">
      <div class="centerpiece-wrapper">
        <div class="centerpiece-media">
          <div class="centerpiece-inner" data-parallax="-22" data-parallax-mode="cover">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85" alt="Monumental Architecture Centerpiece" class="centerpiece-image">
          </div>
        </div>
        <div class="centerpiece-overlay">
          <span class="centerpiece-tag">DEEP PARALLAX INTENSITY (-22%)</span>
          <h2 class="centerpiece-heading">Immersion Through Geometry</h2>
          <p class="centerpiece-text">Notice how the landscape deepens as you scroll through this focal monument.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact">
      <div class="footer-container">
        <div class="footer-top">
          <div>
            <h3 class="footer-title">Let's build something unforgettable.</h3>
            <p class="footer-sub">Independent digital studio crafting bespoke web experiences.</p>
          </div>
          <a href="mailto:hello@weichie.com" class="footer-cta">hello@weichie.com</a>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Weichie Parallax Showcase. Standalone standalone edition.</p>
          <div class="footer-links">
            <a href="#">Brussels</a>
            <a href="#">New York</a>
            <a href="#">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  </main>

  <!-- External GSAP & Lenis Libraries (Loaded via reliable official CDNs) -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
  
  <!-- Standalone Parallax Script -->
  <script src="script.js"></script>
</body>
</html>`;

export const modularCss = `/* ==========================================================================
   Weichie-Style Smooth Parallax Scrolling Stylesheet — Editorial Aesthetic
   ========================================================================== */

:root {
  --bg-color: #0f0f0f;
  --bg-surface: #161616;
  --bg-surface-elevated: #1a1a1a;
  --bg-dark: #0f0f0f;
  --text-primary: #f2f2f2;
  --text-secondary: rgba(242, 242, 242, 0.6);
  --text-light: #f2f2f2;
  --accent-color: #f97316;
  --border-subtle: rgba(255, 255, 255, 0.1);
  --font-display: 'Syne', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-card: 16px;
  --radius-badge: 9999px;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-body);
  color: var(--text-primary);
  background-color: var(--bg-color);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Ensure smooth scrolling container compatibility */
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

body {
  overflow-x: hidden;
  background-color: var(--bg-color);
  cursor: default;
}

/* Custom Cursor */
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: rgba(23, 23, 23, 0.9);
  color: #fff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.25s var(--ease-out-expo), opacity 0.25s ease;
  backdrop-filter: blur(4px);
  mix-blend-mode: normal;
}

.cursor.active {
  transform: translate(-50%, -50%) scale(1);
}

.cursor-text {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 24px 32px;
  backdrop-filter: blur(12px);
  background-color: rgba(247, 246, 244, 0.85);
  border-bottom: 1px solid rgba(229, 227, 222, 0.7);
  transition: padding 0.3s ease;
}

.header-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-bold {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.02em;
}

.logo-sub {
  font-size: 11px;
  font-weight: 600;
  background: var(--text-primary);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.header-badge {
  display: none;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  padding: 6px 14px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: var(--radius-badge);
}

@media (min-width: 768px) {
  .header-badge {
    display: flex;
  }
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--accent-color);
}

.nav-btn {
  text-decoration: none;
  background-color: var(--text-primary);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: var(--radius-badge);
  transition: all 0.25s var(--ease-out-expo);
}

.nav-btn:hover {
  background-color: var(--accent-color);
  transform: translateY(-1px);
}

/* Hero Section */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 140px 24px 80px;
  position: relative;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
}

.hero-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 24px;
  padding: 6px 16px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: var(--radius-badge);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(38px, 7vw, 84px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.outline-text {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--text-primary);
}

.hero-desc {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0 auto 48px;
}

.hero-scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}

.scroll-track {
  width: 2px;
  height: 48px;
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}

.scroll-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--text-primary);
  animation: scrollPulse 2s infinite ease-in-out;
}

@keyframes scrollPulse {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}

/* Work Section */
.work-section {
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 32px 140px;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 32px;
}

@media (min-width: 900px) {
  .section-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.section-badge {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 8px;
  display: block;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  max-width: 480px;
}

/* The Signature Weichie Staggered Parallax Grid */
.work-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 900px) {
  .work-grid {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
  
  /* Stagger the right column downward for natural asymmetry */
  .work-column.col-offset {
    margin-top: 140px;
  }
}

.work-column {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* Cards & Media Windows */
.card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

/* Outer clipping container: must be overflow: hidden */
.card-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-card);
  overflow: hidden;
  background-color: #e5e3de;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.4s var(--ease-out-expo);
}

.card:hover .card-media {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.16);
}

/* Inner media container: transformed by GSAP Parallax */
.card-media-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  transform-origin: center center;
}

/* Image inside inner container */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.4s ease, transform 0.6s var(--ease-out-expo);
}

.card:hover .card-image {
  transform: scale(1.03);
}

.card-speed-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(23, 23, 23, 0.7);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 6px 12px;
  border-radius: var(--radius-badge);
  pointer-events: none;
  z-index: 2;
}

.card-body {
  padding-top: 24px;
}

.card-tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  display: block;
  margin-bottom: 8px;
}

.card-title {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

.card:hover .card-title {
  color: var(--accent-color);
}

.card-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.5;
  max-width: 520px;
}

/* Sticky Split-Scroll Section */
.sticky-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 120px 32px;
}

.sticky-container {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
}

@media (min-width: 960px) {
  .sticky-container {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
}

.sticky-pin {
  align-self: start;
}

@media (min-width: 960px) {
  .sticky-pin {
    position: sticky;
    top: 140px;
  }
}

.sticky-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 20px;
}

.sticky-desc {
  font-size: 17px;
  color: var(--text-secondary);
  margin-bottom: 36px;
  line-height: 1.6;
}

.sticky-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.point-item {
  display: flex;
  gap: 20px;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--bg-color);
  border: 1px solid var(--border-subtle);
}

.point-num {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 800;
  color: var(--accent-color);
}

.point-item strong {
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
}

.point-item p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

.sticky-scroll {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.feature-box {
  background: var(--bg-color);
  padding: 32px;
  border-radius: var(--radius-card);
  border: 1px solid var(--border-subtle);
}

.feature-media {
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
}

.feature-media-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-box h4 {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-box p {
  font-size: 15px;
  color: var(--text-secondary);
}

/* Centerpiece Parallax Section */
.centerpiece-section {
  padding: 120px 32px;
  max-width: 1440px;
  margin: 0 auto;
}

.centerpiece-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
  min-height: 480px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.centerpiece-media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.centerpiece-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.centerpiece-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.centerpiece-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(32px, 6vw, 72px);
  color: #fff;
  z-index: 2;
}

.centerpiece-tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--accent-color);
  margin-bottom: 12px;
}

.centerpiece-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 16px;
}

.centerpiece-text {
  font-size: clamp(16px, 2vw, 20px);
  max-width: 600px;
  color: rgba(255, 255, 255, 0.85);
}

/* Footer */
.footer {
  background-color: var(--bg-dark);
  color: var(--text-light);
  padding: 100px 32px 48px;
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 64px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.footer-sub {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
}

.footer-cta {
  display: inline-block;
  font-family: var(--font-display);
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 4px;
  transition: color 0.2s ease;
}

.footer-cta:hover {
  color: var(--accent-color);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #fff;
}
`;

export const modularJs = `/**
 * ==========================================================================
 * Weichie Parallax Engine
 * Replicating the exact smooth scroll + cover mode parallax from weichie.com
 * ==========================================================================
 */

(function() {
  'use strict';

  // Configuration Constants matching Weichie.com engine
  const DEFAULT_PARALLAX = 15;
  const COVER_SCALE_RATIO = 2.4; // 1 + abs(parallax) * 2.4 / 100

  /**
   * 1. Initialize Lenis Smooth Scrolling
   */
  let lenis = null;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof Lenis !== 'undefined' && !isReducedMotion) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard exponential ease-out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.9,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  /**
   * 2. Weichie Parallax Class
   * Exactly ported from Weichie's production class architecture
   */
  class WeichieParallax {
    static mount(root = document) {
      const els = root.querySelectorAll('[data-parallax]');
      if (!els.length || !window.matchMedia('(hover: hover)').matches) {
        return null;
      }
      return new WeichieParallax(els);
    }

    constructor(els) {
      this.els = Array.from(els);
      this.tweens = [];
      this.mediaContexts = [];

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        try {
          this.els.forEach((el) => this.create(el));
        } catch (err) {
          console.warn('[WeichieParallax] Error initializing parallax:', err);
          this.resetToRest();
          return;
        }

        window.addEventListener('error', this.onWindowError);
      }
    }

    onWindowError = (e) => {
      if (e.filename && e.filename.includes('/build/assets/')) {
        this.resetToRest();
      }
    };

    resetToRest() {
      for (const el of this.els) {
        el.style.transform = '';
      }
    }

    create(el) {
      const minWidth = parseFloat(el.dataset.parallaxMin);
      if (minWidth && typeof gsap !== 'undefined') {
        const mm = gsap.matchMedia();
        mm.add(\`(min-width: \${minWidth}px)\`, () => this.buildTween(el));
        this.mediaContexts.push(mm);
        return;
      }
      this.buildTween(el);
    }

    buildTween(el) {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        return;
      }

      const parallaxVal = parseFloat(el.dataset.parallax) || DEFAULT_PARALLAX;
      const isAlignEnd = el.dataset.parallaxAlign === 'end';
      const triggerEl = el.closest('.card') || el.closest('.feature-box') || el.closest('.centerpiece-wrapper') || el;

      const triggerConfig = {
        trigger: triggerEl,
        start: 'top bottom',
        end: isAlignEnd ? 'bottom bottom' : 'bottom top',
        scrub: true,
      };

      // Weichie Cover Mode: scales element up to prevent revealing blank background during vertical translation
      if (el.dataset.parallaxMode === 'cover') {
        const scale = 1 + (Math.abs(parallaxVal) * COVER_SCALE_RATIO) / 100;
        
        const tween = gsap.fromTo(
          el,
          { yPercent: parallaxVal, scale: scale },
          {
            yPercent: -parallaxVal,
            scale: scale,
            ease: 'none',
            scrollTrigger: triggerConfig,
          }
        );
        this.tweens.push(tween);
        return;
      }

      // Standard translate parallax
      const tween = gsap.fromTo(
        el,
        { yPercent: parallaxVal },
        {
          yPercent: isAlignEnd ? 0 : -parallaxVal,
          ease: 'none',
          scrollTrigger: triggerConfig,
        }
      );
      this.tweens.push(tween);
    }

    destroy() {
      window.removeEventListener('error', this.onWindowError);
      for (const tween of this.tweens) {
        tween.scrollTrigger && tween.scrollTrigger.kill && tween.scrollTrigger.kill();
        tween.kill && tween.kill();
      }
      for (const mm of this.mediaContexts) {
        mm.revert && mm.revert();
      }
      this.tweens = [];
      this.mediaContexts = [];
    }
  }

  /**
   * 3. Interactive Mouse Follower & 3D Tilt Hover Effects
   */
  function initCardInteractions() {
    const cursor = document.getElementById('cursor');
    const cursorText = document.getElementById('cursor-text');
    const cards = document.querySelectorAll('[data-cursor-card]');

    if (!cursor || !cards.length) return;

    // Track mouse movement
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderCursor() {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.transform = \`translate3d(\${cursorX}px, \${cursorY}px, 0) translate(-50%, -50%)\`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    cards.forEach((card) => {
      const customLabel = card.getAttribute('data-cursor-card') || 'VIEW';

      card.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        if (cursorText) cursorText.textContent = customLabel;
      });

      card.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
      });

      // Subtle 3D tilt on card media container
      const media = card.querySelector('[data-promote]');
      if (media) {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          media.style.transform = \`perspective(1000px) rotateY(\${x * 4}deg) rotateX(\${-y * 4}deg) scale3d(1.01, 1.01, 1.01)\`;
        });

        card.addEventListener('mouseleave', () => {
          media.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
        });
      }
    });
  }

  // DOM Content Loaded Execution
  document.addEventListener('DOMContentLoaded', () => {
    WeichieParallax.mount();
    initCardInteractions();
  });

  // Export to window for live inspector / sandbox control
  window.WeichieParallax = WeichieParallax;
  window.weichieLenis = lenis;
})();
`;

export const modularReadme = `# Weichie Parallax Effect (Modular Standalone Edition)

This package contains the exact smooth parallax scrolling effect as featured on [Weichie.com](https://weichie.com/).

## 🚀 How to Run (One-Click Playable)
**Zero installations, zero npm, zero React required.**

1. Unzip this folder.
2. Double-click **\`index.html\`** to open it in any modern browser (Chrome, Edge, Safari, Firefox, Arc).
3. Scroll through the page to experience the inertial scrolling, dual-speed cover parallax windows, and hover interactions!

## 📁 File Structure
- **\`index.html\`**: Semantic HTML5 markup with \`data-parallax\` attributes, cover mode configurations, and CDN links.
- **\`style.css\`**: Clean modern CSS featuring CSS Custom Properties, layout grids, responsive media queries, and masked image clipping.
- **\`script.js\`**: Production-grade JavaScript incorporating Lenis inertial smoothing, GSAP ScrollTrigger orchestration, and the custom Weichie cover-scaling parallax class.

## 🛠 Features Included
- **Cover Mode Image Parallax**: Automatically calculates \`scale = 1 + abs(speed) * 0.024\` so moving images inside clipped windows never show white edges.
- **Dual-Speed Grid**: Left column runs at -12% velocity; Right column runs at -18% velocity with vertical offset for organic depth.
- **Lenis Inertial Smoothing**: Smooth wheel interpolation synchronized to GSAP's \`ScrollTrigger.update\`.
- **Interactive Cursor Badge**: Follows mouse with custom label triggers when hovering over project cards.
- **Deep Centerpiece Showcase**: -22% parallax focal banner.

## 🖼 How to Add or Change Images in the Parallax Grid
In \`index.html\`, find any \`<article class="card">\` element:

\`\`\`html
<div class="card-media" data-promote>
  <!-- Set speed (-10, -15, -20) on data-parallax -->
  <div class="card-media-inner" data-parallax="-14" data-parallax-mode="cover">
    <!-- Replace the src with your image path or web URL: -->
    <img src="https://your-domain.com/photo.jpg" alt="Project" class="card-image" loading="lazy">
  </div>
</div>
\`\`\`

- **Local Images**: Put your photos in an \`images/\` folder and use \`<img src="images/my-photo.jpg">\`.
- **Change Speed**: Adjust \`data-parallax="-16"\` (more negative = faster upward shift on scroll down).
- **Add More Cards**: Duplicate any \`<article class="card">\` and paste it inside \`#col-left\` or \`#col-right\`.
- **Cover Mode**: Keep \`data-parallax-mode="cover"\` on the inner container so the system pre-scales the image to prevent empty gaps!
`;

/**
 * Single-file all-in-one inline version.
 * Contains HTML + CSS inside <style> + JS inside <script>.
 */
export const inlineHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weichie Parallax Effect — All-In-One Standalone</title>
  
  <!-- Typography (Google Fonts: Syne & Plus Jakarta Sans) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
  
  <style>
${modularCss}
  </style>
</head>
<body>
  <!-- Custom Cursor Follower -->
  <div class="cursor" id="cursor">
    <span class="cursor-text" id="cursor-text">EXPLORE</span>
  </div>

  <!-- Header Navigation -->
  <header class="site-header">
    <div class="header-container">
      <a href="#" class="logo">
        <span class="logo-bold">WEICHIE</span>
        <span class="logo-sub">STUDIO</span>
      </a>
      <div class="header-badge">
        <span class="pulse-dot"></span>
        <span>BRUSSELS & NEW YORK</span>
      </div>
      <nav class="nav">
        <a href="#work" class="nav-link">SELECTED WORK</a>
        <a href="#about" class="nav-link">APPROACH</a>
        <a href="#contact" class="nav-btn">GET IN TOUCH</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-tag">DIGITAL ARCHITECTURE & IMMERSIVE DESIGN</div>
        <h1 class="hero-title">
          CRAFTING DIGITAL <br>
          <span class="outline-text">SPACES</span> THAT MOVE
        </h1>
        <p class="hero-desc">
          Experience liquid, inertial scrolling synchronized with dual-speed cover parallax windows. As seen on Weichie.com.
        </p>
        <div class="hero-scroll-indicator">
          <div class="scroll-track">
            <div class="scroll-thumb"></div>
          </div>
          <span>SCROLL TO EXPLORE PARALLAX</span>
        </div>
      </div>
    </section>

    <!-- Selected Work: Signature Weichie Dual-Speed Asymmetrical Parallax Grid -->
    <section class="work-section" id="work">
      <div class="section-header">
        <div>
          <span class="section-badge">PORTFOLIO</span>
          <h2 class="section-title">Selected Works</h2>
        </div>
        <p class="section-subtitle">
          Notice how the left and right columns glide at alternating velocities (-12% vs -18%), while internal media masks expand and scrub dynamically.
        </p>
      </div>

      <div class="work-grid">
        <!-- Column 1 (Left - Moving at Velocity A) -->
        <div class="work-column" id="col-left">
          <!-- Card 1 -->
          <article class="card" data-cursor-card="VIEW CASE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-12" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" alt="Adaptive Green Architecture" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -12%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">WEB DEVELOPMENT & 3D</span>
              <h3 class="card-title">Adaptive Green</h3>
              <p class="card-desc">Leaders in Carbon Negative Green Infrastructure & Climate Positive Architectural Systems.</p>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="card" data-cursor-card="EXPLORE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-14" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85" alt="Modular Pavilions" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -14%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">SPATIAL ENGINEERING</span>
              <h3 class="card-title">Viewbox Modular</h3>
              <p class="card-desc">Modular structural solutions blending industrial efficiency with tailored museum-grade aesthetics.</p>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="card" data-cursor-card="INSPECT">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-12" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85" alt="Geometric Glass Facade" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -12%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">ECOMMERCE PLATFORM</span>
              <h3 class="card-title">Nordic Pavilion</h3>
              <p class="card-desc">High-speed e-commerce infrastructure engineered for international contemporary furnishings.</p>
            </div>
          </article>
        </div>

        <!-- Column 2 (Right - Moving at Velocity B with Offset) -->
        <div class="work-column col-offset" id="col-right">
          <!-- Card 4 -->
          <article class="card" data-cursor-card="VIEW CASE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-18" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85" alt="Minimalist Concrete House" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -18%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">INTERACTIVE BRANDING</span>
              <h3 class="card-title">Spantech Structures</h3>
              <p class="card-desc">Rapid deployable temporary architectural venues built for global festivals and diplomatic summits.</p>
            </div>
          </article>

          <!-- Card 5 -->
          <article class="card" data-cursor-card="DISCOVER">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-16" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85" alt="Modern Sustainable Residence" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -16%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">DIGITAL CAMPAIGN</span>
              <h3 class="card-title">Mechelen Feest</h3>
              <p class="card-desc">City-wide summer festival platform coordinating performances, interactive maps, and live visitor flows.</p>
            </div>
          </article>

          <!-- Card 6 -->
          <article class="card" data-cursor-card="VIEW CASE">
            <div class="card-media" data-promote>
              <div class="card-media-inner" data-parallax="-18" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Architectural Studio Interior" class="card-image" loading="lazy">
              </div>
              <div class="card-speed-badge">Speed: -18%</div>
            </div>
            <div class="card-body">
              <span class="card-tag">EXPERIENCE DESIGN</span>
              <h3 class="card-title">Horizon Atelier</h3>
              <p class="card-desc">Virtual gallery spaces and interactive architectural walkthroughs rendered in real-time WebGL.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Sticky Split-Scroll Parallax Section -->
    <section class="sticky-section" id="about">
      <div class="sticky-container">
        <!-- Sticky Pin Column -->
        <div class="sticky-pin">
          <span class="section-badge">METHODOLOGY</span>
          <h2 class="sticky-title">How the Weichie Parallax System Works</h2>
          <p class="sticky-desc">
            Unlike cheap CSS translateY jitter, Weichie unifies three distinct mathematical layers:
          </p>
          <ul class="sticky-points">
            <li class="point-item">
              <span class="point-num">01</span>
              <div>
                <strong>Inertial Lerp Smoothing</strong>
                <p>Smooths mousewheel inputs using virtual damping so frames never stutter.</p>
              </div>
            </li>
            <li class="point-item">
              <span class="point-num">02</span>
              <div>
                <strong>Optical Cover Mode</strong>
                <p>Inner media is pre-scaled by [1 + abs(speed) * 0.024], preventing blank borders.</p>
              </div>
            </li>
            <li class="point-item">
              <span class="point-num">03</span>
              <div>
                <strong>Asymmetrical Offset Speeds</strong>
                <p>Columns scroll at divergent rates to create realistic optical parallax depth.</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Scrolling Content Column -->
        <div class="sticky-scroll">
          <div class="feature-box">
            <div class="feature-media" data-promote>
              <div class="feature-media-inner" data-parallax="-15" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=85" alt="Engineering precision" class="feature-image">
              </div>
            </div>
            <h4>Smooth Precision</h4>
            <p>Every pixel calculation uses requestAnimationFrame and GSAP's optimized ticker.</p>
          </div>

          <div class="feature-box">
            <div class="feature-media" data-promote>
              <div class="feature-media-inner" data-parallax="-20" data-parallax-mode="cover">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85" alt="Design workspace" class="feature-image">
              </div>
            </div>
            <h4>Hardware Accelerated</h4>
            <p>Runs strictly via transform3d (GPU composite layers) for consistent 60+ FPS performance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Deep Parallax Centerpiece Showcase -->
    <section class="centerpiece-section">
      <div class="centerpiece-wrapper">
        <div class="centerpiece-media">
          <div class="centerpiece-inner" data-parallax="-22" data-parallax-mode="cover">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85" alt="Monumental Architecture Centerpiece" class="centerpiece-image">
          </div>
        </div>
        <div class="centerpiece-overlay">
          <span class="centerpiece-tag">DEEP PARALLAX INTENSITY (-22%)</span>
          <h2 class="centerpiece-heading">Immersion Through Geometry</h2>
          <p class="centerpiece-text">Notice how the landscape deepens as you scroll through this focal monument.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact">
      <div class="footer-container">
        <div class="footer-top">
          <div>
            <h3 class="footer-title">Let's build something unforgettable.</h3>
            <p class="footer-sub">Independent digital studio crafting bespoke web experiences.</p>
          </div>
          <a href="mailto:hello@weichie.com" class="footer-cta">hello@weichie.com</a>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Weichie Parallax Showcase. Standalone standalone edition.</p>
          <div class="footer-links">
            <a href="#">Brussels</a>
            <a href="#">New York</a>
            <a href="#">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  </main>

  <!-- External Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
  
  <script>
${modularJs}
  </script>
</body>
</html>`;
