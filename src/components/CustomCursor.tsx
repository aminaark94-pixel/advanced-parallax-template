import { useEffect, useState } from 'react';

interface CustomCursorProps {
  label: string | null;
}

export function CustomCursor({ label }: CustomCursorProps) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  const isActive = Boolean(label);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
          isActive
            ? 'w-20 h-20 bg-orange-500 text-neutral-950 shadow-xl shadow-orange-500/20 backdrop-blur-sm scale-100'
            : 'w-3 h-3 bg-white/40 ring-1 ring-white/60 scale-100'
        }`}
      >
        {isActive && (
          <span className="text-[9px] font-sans font-extrabold tracking-[0.2em] text-center uppercase px-2 select-none">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
