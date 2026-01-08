"use client";

import { Wifi, Bath, Home, UtensilsCrossed } from "lucide-react";
import LodgeSlider from "@/app/components/LodgeSlider";
import { useGetHotels, useHotels } from "@/stores/hotelStore";
import { useEffect } from "react";
import { MapPin, Star, Phone, Mail, ImageOff } from "lucide-react";
import Link from "next/link";

export function Rooms() {
  const getHotels = useGetHotels();
  const hotels = useHotels();

  useEffect(() => {
    void getHotels();
  }, [getHotels]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rooms" className="py-20 bg-[#ece8e5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#413328]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Lodges
          </h2>
          <p className="text-lg text-[#76765c] max-w-2xl mx-auto">
            Stay in authentic lodges blending comfort and Kyrgyz charm — Darya
            Hostel, Beymaral Lodge, and Peak Lodge
          </p>
        </div>

        <div className="space-y-12">
          {hotels.map((lodge, index) => (
            <Link
              href={`/hotel/${lodge.id}`}
              key={lodge.id}
              className={`bg-[#feffff] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
            >
              {/* Image / Placeholder */}
              <div className="lg:w-1/2 h-64 lg:h-auto bg-[#e6e1db] flex items-center justify-center">
                {lodge.images && lodge.images.length > 0 ? (
                  <LodgeSlider images={lodge.images} />
                ) : (
                  <div className="flex flex-col items-center text-[#76765c]">
                    <ImageOff size={40} className="mb-2" />
                    <span style={{ fontFamily: "Signika, sans-serif" }}>
                      No images available
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="mb-6">
                  <h3
                    className="text-3xl mb-3 text-[#413328]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {lodge.name}
                  </h3>

                  <p
                    className="text-lg text-[#76765c] mb-4"
                    style={{ fontFamily: "Signika, sans-serif" }}
                  >
                    {lodge.description}
                  </p>

                  {/* Address */}
                  <div className="flex items-center text-[#76765c] mb-3" style={{ fontFamily: "Signika, sans-serif" }}>
                    <MapPin size={18} className="mr-2 text-[#413328]" />
                    <span>{lodge.address}</span>
                  </div>

                  <div className="flex items-center text-[#76765c] mb-3">
                    {Array.from({ length: lodge.stars }).map((_, idx) => (
                      <Star key={idx} fill="#413328" size={18} className="mr-2 text-[#413328]" />
                    ))}
                  </div>

                  {/* Phone */}
                  <div className="flex items-center text-[#76765c] mb-3" style={{ fontFamily: "Signika, sans-serif" }}>
                    <Phone size={18} className="mr-2 text-[#413328]" />
                    <span>{lodge.phone}</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center text-[#76765c]" style={{ fontFamily: "Signika, sans-serif" }}>
                    <Mail size={18} className="mr-2 text-[#413328]" />
                    <span>{lodge.email}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#d6ccc2] flex justify-end">
                  <button
                    onClick={scrollToContact}
                    className="bg-[#413328] text-[#feffff] px-6 py-3 rounded-md hover:bg-[#76765c] transition-colors duration-300"
                    style={{ fontFamily: "Signika, sans-serif" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 bg-[#feffff] p-8 rounded-lg shadow-lg">
          <h3
            className="text-2xl mb-6 text-[#413328] text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Standard Amenities Across All Lodges
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Bath className="w-10 h-10 text-[#413328] mb-2" />
              <p
                className="text-[#76765c]"
                style={{ fontFamily: "Signika, sans-serif" }}
              >
                Towels & Toiletries
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Home className="w-10 h-10 text-[#413328] mb-2" />
              <p
                className="text-[#76765c]"
                style={{ fontFamily: "Signika, sans-serif" }}
              >
                Bathrobes & Slippers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Wifi className="w-10 h-10 text-[#413328] mb-2" />
              <p
                className="text-[#76765c]"
                style={{ fontFamily: "Signika, sans-serif" }}
              >
                Free Wi-Fi
              </p>
            </div>
            <div className="flex flex-col items-center">
              <UtensilsCrossed className="w-10 h-10 text-[#413328] mb-2" />
              <p
                className="text-[#76765c]"
                style={{ fontFamily: "Signika, sans-serif" }}
              >
                Dining Options
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
