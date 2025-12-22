import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function GalleryReel({ title, subtitle, items }) {
  return (
    <section id="work" className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="text-xs text-neutral-500">
            Drag • Scroll • Arrow keys
          </div>
        </div>

        <div className="mt-8">
          <Swiper
            modules={[Navigation, Keyboard, Mousewheel]}
            navigation
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            grabCursor
            spaceBetween={18}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 1.9 },
              1024: { slidesPerView: 2.4 },
              1280: { slidesPerView: 2.8 },
            }}
            className="looper-swiper"
          >
            {items.map((it) => (
              <SwiperSlide key={it.src}>
                <figure className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                  <div className="aspect-[3/2] w-full overflow-hidden bg-neutral-50">
                    <img
                      src={it.src}
                      alt={it.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <figcaption className="p-5">
                    <div className="text-sm font-semibold text-neutral-900">
                      {it.label}
                    </div>
                    {it.meta ? (
                      <div className="mt-1 text-xs text-neutral-500">{it.meta}</div>
                    ) : null}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
