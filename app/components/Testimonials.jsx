"use client";

import { useGetTestimonials, useTestimonials } from "@/stores/testimonialStore";
import { useEffect } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const getTestimonials = useGetTestimonials();
  const testimonials = useTestimonials();

  useEffect(() => {
    void getTestimonials();
  }, [getTestimonials]);

  return (
    <section className=" bg-[#f6f3ee]">
      <div className="grid container mx-auto grid-cols-1 md:grid-cols-2">
        <div className="relative h-[260px] md:h-[320px]">
          <h3
            className={"py-1.5 px-5"}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Company Profile Presentation 2025
          </h3>
          <img
            src="https://kappa.lol/k23UwD"
            alt="Guests"
            className="object-cover w-full"
          />
        </div>

        <div className="flex items-center bg-[#7a7a5f] px-10 md:px-16">
          <h2
            className="text-white text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Client <br /> Testimonials
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#e7e1d8] text-center px-6 pt-14 pb-10 relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f6f3ee]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-2">{t.name}</h3>
              <p className="uppercase text-xs tracking-widest text-gray-600 mb-2">
                {t.country}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} fill="#413328" size={18} className="mr-2 text-[#413328]" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-gray-800">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
