# Weichie Parallax Effect (Modular Standalone Edition)

This package contains the exact smooth parallax scrolling effect as featured on [Weichie.com](https://weichie.com/).

## 🚀 How to Run (One-Click Playable)
**Zero installations, zero npm, zero React required.**

1. Unzip this folder.
2. Double-click **`index.html`** to open it in any modern browser (Chrome, Edge, Safari, Firefox, Arc).
3. Scroll through the page to experience the inertial scrolling, dual-speed cover parallax windows, and hover interactions!

## 📁 File Structure
- **`index.html`**: Semantic HTML5 markup with `data-parallax` attributes, cover mode configurations, and CDN links.
- **`style.css`**: Clean modern CSS featuring CSS Custom Properties, layout grids, responsive media queries, and masked image clipping.
- **`script.js`**: Production-grade JavaScript incorporating Lenis inertial smoothing, GSAP ScrollTrigger orchestration, and the custom Weichie cover-scaling parallax class.

## 🛠 Features Included
- **Cover Mode Image Parallax**: Automatically calculates `scale = 1 + abs(speed) * 0.024` so moving images inside clipped windows never show white edges.
- **Dual-Speed Grid**: Left column runs at -12% velocity; Right column runs at -18% velocity with vertical offset for organic depth.
- **Lenis Inertial Smoothing**: Smooth wheel interpolation synchronized to GSAP's `ScrollTrigger.update`.
- **Interactive Cursor Badge**: Follows mouse with custom label triggers when hovering over project cards.
- **Deep Centerpiece Showcase**: -22% parallax focal banner.
