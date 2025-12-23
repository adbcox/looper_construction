import React, { useMemo, useRef } from "react";

export function ImageReel({ images = [] }) {
  const scrollerRef = useRef(null);

  const safeImages = useMemo(() => {
    if (images.length > 0) return images;
    // fallback
    return new Array(8).fill(0).map((_, i) => ({
      src: "/images/placeholder.svg",
      alt: `Placeholder ${i + 1}`,
    }));
  }, [images]);

  function scrollByCards(dir) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-neutral-100 px-4 py-3">
        <div className="text-sm font-semibold tracking-tight">Gallery reel</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:-translate-y-0.5"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:-translate-y-0.5"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* Not scroll-jacked: user can scroll page normally; this is just an overflow-x region */}
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto px-4 py-5 [scrollbar-width:thin] [scrollbar-color:rgb(212_212_212)_transparent] snap-x snap-mandatory"
      >
        {safeImages.map((img, idx) => (
          <figure
            key={`${img.src}-${idx}`}
            className="snap-start shrink-0 w-[78%] sm:w-[52%] md:w-[36%] lg:w-[30%]"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
              <img
                src={img.src}
                alt={img.alt || `Image ${idx + 1}`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-neutral-900/0 to-neutral-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </figure>
        ))}
      </div>

      <div className="border-t border-neutral-100 px-4 py-3 text-xs text-neutral-500">
        Wheel/trackpad scroll works naturally inside the reel; page scroll stays normal (no scroll-jack).
      </div>
    </div>
  );
}
