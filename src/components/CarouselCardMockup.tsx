import { CarouselCard } from '../data/carouselProjects.ts';
import { ExternalLink, ShoppingBag, Eye, Layers } from 'lucide-react';

interface CarouselCardMockupProps {
  card: CarouselCard;
  isCenter: boolean;
}

export function CarouselCardMockup({ card, isCenter }: CarouselCardMockupProps) {
  switch (card.cardType) {
    case 'taco':
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#0c2e1c] text-[#f4ecd8] flex flex-col items-center justify-between p-7 select-none">
          {/* Subtle radiating sunburst & decorative Mayan/Aztec symbols */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-300/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-96 h-96 rounded-full border-8 border-dashed border-amber-300 animate-[spin_60s_linear_infinite]"></div>
          </div>

          {/* Top Brand Banner */}
          <div className="relative z-10 text-center mt-2">
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-400 font-bold block mb-1">
              AUTHENTIC BRUSSELS STREETFOOD
            </span>
            <h2 className="font-serif font-black text-2xl sm:text-3xl tracking-wider text-amber-200 uppercase drop-shadow-md">
              LES TONTONS
            </h2>
          </div>

          {/* Central Hero Character Art */}
          <div className="relative z-10 flex flex-col items-center my-auto">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
              {/* Sunburst backdrop ring */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
              
              {/* Illustrated Character SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                {/* Golden Sunburst Rays */}
                <g stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
                  <line x1="100" y1="10" x2="100" y2="35" />
                  <line x1="100" y1="165" x2="100" y2="190" />
                  <line x1="10" y1="100" x2="35" y2="100" />
                  <line x1="165" y1="100" x2="190" y2="100" />
                  <line x1="36" y1="36" x2="54" y2="54" />
                  <line x1="146" y1="146" x2="164" y2="164" />
                  <line x1="36" y1="164" x2="54" y2="146" />
                  <line x1="146" y1="54" x2="164" y2="36" />
                </g>

                {/* Mexican Luchador / Taco Messiah Character Body */}
                <ellipse cx="100" cy="115" rx="32" ry="40" fill="#ffffff" stroke="#000" strokeWidth="3" />
                {/* Green Pants */}
                <path d="M78 135 L74 185 L96 185 L100 150 L104 185 L126 185 L122 135 Z" fill="#15803d" stroke="#000" strokeWidth="3" />
                {/* Red Sash */}
                <rect x="76" y="130" width="48" height="8" rx="2" fill="#dc2626" />
                
                {/* Gold Mask & Head */}
                <circle cx="100" cy="75" r="26" fill="#facc15" stroke="#000" strokeWidth="3" />
                {/* Horns / Flames on mask */}
                <path d="M78 60 Q70 40 85 45 Q88 55 92 62 Z" fill="#eab308" stroke="#000" strokeWidth="2" />
                <path d="M122 60 Q130 40 115 45 Q112 55 108 62 Z" fill="#eab308" stroke="#000" strokeWidth="2" />
                
                {/* Eyes & Mustache */}
                <ellipse cx="91" cy="72" rx="3.5" ry="4.5" fill="#000" />
                <ellipse cx="109" cy="72" rx="3.5" ry="4.5" fill="#000" />
                <path d="M85 82 Q100 90 115 82 Q100 94 85 82 Z" fill="#000" />

                {/* Raised Hands holding Taco / Golden Spatula */}
                <path d="M68 110 L50 85 L58 75 L76 98 Z" fill="#facc15" stroke="#000" strokeWidth="2.5" />
                <path d="M132 110 L150 85 L142 75 L124 98 Z" fill="#facc15" stroke="#000" strokeWidth="2.5" />
                
                {/* Golden Floating Taco */}
                <path d="M40 70 Q55 50 70 70 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
                <circle cx="55" cy="65" r="2" fill="#ef4444" />
                <circle cx="50" cy="63" r="2" fill="#16a34a" />
              </svg>
            </div>

            {/* Banner Ribbon */}
            <div className="bg-amber-400 text-[#0c2e1c] font-black tracking-widest text-xs px-4 py-1.5 rounded-sm uppercase mt-2 shadow-lg border border-amber-300">
              TACO MESSIAH
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="relative z-10 w-full flex items-center justify-between text-[11px] text-amber-300/80 pt-4 border-t border-amber-400/20">
            <span className="font-mono">BRUSSELS • 1050</span>
            <span className="uppercase tracking-widest text-amber-200 font-semibold flex items-center gap-1">
              Order Online <ExternalLink className="w-3 h-3 ml-0.5" />
            </span>
          </div>
        </div>
      );

    case 'furniture':
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#ded8ce] flex flex-col select-none">
          {/* Top Browser Bar */}
          <div className="bg-[#ede8e1]/90 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between border-b border-neutral-300/60 z-20">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
            </div>

            {/* Address Bar Pill */}
            <div className="bg-white/80 border border-neutral-300/80 rounded-full px-5 py-0.5 text-[11px] font-sans font-medium text-neutral-800 tracking-wider shadow-2xs">
              van proet.
            </div>

            <div className="text-[10px] font-sans font-bold text-neutral-600 tracking-wider uppercase">
              Menu —
            </div>
          </div>

          {/* Interior Architectural Photograph Content */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Van Proet Interior Architecture"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-700 hover:scale-110"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Overlaid Editorial Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white z-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-orange-400 block mb-1">
                BELGISCH DESIGN MEUBELEN
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight leading-snug mb-4 max-w-sm drop-shadow-md">
                Thuis in unieke meubelcollecties
              </h3>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/30">
                  Indoor
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/30">
                  Outdoor
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/30">
                  Office
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'beer':
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#eee6d8] flex flex-col select-none">
          {/* Top Brand Bar */}
          <div className="bg-white/90 px-5 py-2.5 flex items-center justify-between border-b border-neutral-200 z-20">
            <span className="font-black text-lg tracking-tighter text-red-600 font-sans">
              TOUT BIEN
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                Shop
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-200 text-neutral-800 text-[10px] font-bold uppercase tracking-wider">
                Story
              </span>
            </div>
          </div>

          {/* 3 Color Columns with Beer Cans on Summer Beach */}
          <div className="relative flex-1 grid grid-cols-3 divide-x divide-neutral-200/50 bg-[#e8dfcf]">
            {/* Can 1: Belgian Pils (Vanilla / Cream) */}
            <div className="relative bg-[#f6f2e9] flex flex-col items-center justify-between p-3 py-5">
              <span className="text-[9px] font-black uppercase tracking-wider text-neutral-800">
                BELGIAN PILS
              </span>

              {/* Illustrated Can */}
              <div className="w-16 sm:w-20 h-28 sm:h-36 rounded-xl bg-gradient-to-r from-neutral-200 via-white to-neutral-300 border border-neutral-400/40 shadow-xl flex flex-col items-center justify-between p-2 my-auto relative overflow-hidden">
                <div className="w-full h-1.5 bg-neutral-300 rounded-full"></div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-[8px] font-black text-neutral-600">BELGIAN PILS</span>
                  <span className="text-[12px] sm:text-[14px] font-black text-red-600 leading-tight">TOUT<br/>BIEN</span>
                  <span className="text-[10px] text-red-500">❤️</span>
                </div>
                <span className="text-[7px] font-mono text-neutral-500">5.2% ALC</span>
              </div>

              <button className="w-full py-1.5 bg-white border border-neutral-300 rounded text-[8px] sm:text-[9px] font-black text-neutral-900 tracking-wider uppercase hover:bg-neutral-100 transition-colors shadow-2xs">
                BUY OUR PILS
              </button>
            </div>

            {/* Can 2: Belgian Rouge (Vibrant Crimson Red) */}
            <div className="relative bg-[#dc2626] flex flex-col items-center justify-between p-3 py-5 text-white">
              <span className="text-[9px] font-black uppercase tracking-wider text-red-100">
                BELGIAN ROUGE
              </span>

              {/* Illustrated Can */}
              <div className="w-16 sm:w-20 h-28 sm:h-36 rounded-xl bg-gradient-to-r from-red-700 via-red-500 to-red-800 border border-red-400/40 shadow-xl flex flex-col items-center justify-between p-2 my-auto relative overflow-hidden">
                <div className="w-full h-1.5 bg-red-300/40 rounded-full"></div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-[8px] font-black text-red-200">BELGIAN ROUGE</span>
                  <span className="text-[12px] sm:text-[14px] font-black text-white leading-tight">TOUT<br/>BIEN</span>
                  <span className="text-[10px] text-white">❤️</span>
                </div>
                <span className="text-[7px] font-mono text-red-200">7.0% ALC</span>
              </div>

              <button className="w-full py-1.5 bg-white border border-red-300 rounded text-[8px] sm:text-[9px] font-black text-red-600 tracking-wider uppercase hover:bg-red-50 transition-colors shadow-2xs">
                BUY OUR ROUGE
              </button>
            </div>

            {/* Can 3: Belgian 0.0 Pils (Electric Cyan Blue) */}
            <div className="relative bg-[#0284c7] flex flex-col items-center justify-between p-3 py-5 text-white">
              <span className="text-[9px] font-black uppercase tracking-wider text-sky-100">
                BELGIAN 0.0
              </span>

              {/* Illustrated Can */}
              <div className="w-16 sm:w-20 h-28 sm:h-36 rounded-xl bg-gradient-to-r from-sky-700 via-sky-400 to-sky-800 border border-sky-300/40 shadow-xl flex flex-col items-center justify-between p-2 my-auto relative overflow-hidden">
                <div className="w-full h-1.5 bg-sky-200/40 rounded-full"></div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-[8px] font-black text-sky-100">BELGIAN 0.0</span>
                  <span className="text-[12px] sm:text-[14px] font-black text-white leading-tight">TOUT<br/>BIEN</span>
                  <span className="text-[10px] text-white">❤️</span>
                </div>
                <span className="text-[7px] font-mono text-sky-200">0.0% ALC</span>
              </div>

              <button className="w-full py-1.5 bg-white border border-sky-300 rounded text-[8px] sm:text-[9px] font-black text-sky-700 tracking-wider uppercase hover:bg-sky-50 transition-colors shadow-2xs">
                BUY OUR ZERO
              </button>
            </div>
          </div>
        </div>
      );

    case 'architecture':
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#ebe8e3] flex flex-col select-none">
          {/* Architectural Concrete / Marble Texture */}
          <div className="bg-white/85 px-4 py-2 flex items-center justify-between border-b border-neutral-300 text-xs font-mono text-neutral-600">
            <span className="font-bold text-emerald-700">ADAPTIVE GREEN // ROOF</span>
            <span>SYSTEM 04</span>
          </div>

          <div className="relative flex-1 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-neutral-300 shadow-sm relative aspect-4/3 sm:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85"
                alt="Green Living Roof"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                SEDUM LIVING SURFACE
              </div>
            </div>

            <div className="flex flex-col justify-between bg-white p-4 rounded-xl border border-neutral-200">
              <div>
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">TELEMETRY</span>
                <h4 className="font-serif font-black text-lg text-neutral-900 mt-1">Thermal Reduction -4.8°C</h4>
                <p className="text-neutral-500 text-xs mt-2 leading-relaxed">
                  Engineered layered substratum optimizing stormwater retention and urban biodiversity.
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-[10px] font-mono text-neutral-600">
                <span>RETENTION: 78%</span>
                <span className="text-emerald-600 font-bold">OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full relative overflow-hidden bg-neutral-900 text-white flex flex-col justify-between p-8 select-none">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">{card.category}</span>
            <span className="text-xs text-neutral-400 font-mono">{card.year}</span>
          </div>
          <div>
            <h3 className="font-serif font-black text-3xl mb-2">{card.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{card.description}</p>
          </div>
          <div className="flex gap-2">
            {card.tags.map((t) => (
              <span key={t} className="text-[10px] px-2.5 py-1 rounded bg-white/10 text-neutral-300 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      );
  }
}
