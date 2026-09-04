/**
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
        mm.add(`(min-width: ${minWidth}px)`, () => this.buildTween(el));
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
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
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
          media.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) scale3d(1.01, 1.01, 1.01)`;
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
