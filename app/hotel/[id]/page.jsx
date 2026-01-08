"use client";

import {
  ArrowLeft,
  Bed,
  Maximize,
  MapPin,
  Cigarette,
  CigaretteOff,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  ImageOff
} from "lucide-react";
import { useEffect, useState } from "react";
import LodgeSlider from "@/app/components/LodgeSlider";
import { useParams, useRouter } from "next/navigation";
import {
  useGetByIdHotel,
  useGetHotels,
  useHotel,
  useHotels,
} from "@/stores/hotelStore";

export default function HotelDetails() {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();
  const router = useRouter();
  const rooms = useHotel();
  const hotels = useHotels();
  const getByIdHotel = useGetByIdHotel();
  const getHotels = useGetHotels();

  useEffect(() => {
    void getByIdHotel(id);
    void getHotels();
  }, [getByIdHotel, id, getHotels]);

  useEffect(() => {
    const hotel = hotels.find((h) => h.id === id);
    setHotel(hotel);
  }, [hotels]);

  const scrollToContact = () => {
    router.back();
    setTimeout(() => {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  if (!hotel) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-[#feffff]">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#feffff] border-b border-[#d6ccc2] shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#413328] hover:text-[#76765c] transition-colors"
            style={{ fontFamily: "Signika, sans-serif" }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to all lodges
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={
            hotel.images[0].url ||
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
          }
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060504]/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-[#feffff]">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <h1
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {hotel.name}
              </h1>
              <div className="flex items-center gap-1">
                {Array.from({ length: hotel.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-[#eddfd4] text-[#eddfd4]"
                  />
                ))}
              </div>
            </div>
            <p
              className="text-xl md:text-2xl mb-2"
              style={{ fontFamily: "Signika, sans-serif" }}
            >
              {hotel.description}
            </p>
            <div className="flex items-center gap-2 text-[#eddfd4]">
              <MapPin className="w-4 h-4" />
              <span style={{ fontFamily: "Signika, sans-serif" }}>
                {hotel.address}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hotel Contact Info */}
        <div className="mb-12 bg-[#ece8e5] p-8 rounded-lg">
          <h3
            className="text-2xl mb-6 text-[#413328]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-[#76765c]">
              <Phone className="w-5 h-5 text-[#413328]" />
              <span style={{ fontFamily: "Signika, sans-serif" }}>
                {hotel.phone}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#76765c]">
              <Mail className="w-5 h-5 text-[#413328]" />
              <span style={{ fontFamily: "Signika, sans-serif" }}>
                {hotel.email}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#76765c]">
              <MapPin className="w-5 h-5 text-[#413328]" />
              <span style={{ fontFamily: "Signika, sans-serif" }}>
                {hotel.address}
              </span>
            </div>
          </div>
        </div>

        {/* Available Rooms */}
        <div>
          <h2
            className="text-3xl mb-8 text-[#413328]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Available Rooms
          </h2>

          {rooms.length === 0 ? (
            <div className="bg-[#ece8e5] p-12 rounded-lg text-center">
              <p
                className="text-lg text-[#76765c]"
                style={{ fontFamily: "Signika, sans-serif" }}
              >
                No rooms available at the moment. Please contact us for more
                information.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-[#feffff] border border-[#d6ccc2] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Room Image Placeholder */}
                    <div className="md:w-1/2 h-48 md:h-auto bg-gradient-to-br from-[#eddfd4] to-[#d6ccc2] flex items-center justify-center">
                      {room.images && room.images.length > 0 ? (
                        <LodgeSlider images={room.images} />
                      ) : (
                        <div className="flex flex-col items-center text-[#76765c]">
                          <ImageOff size={40} className="mb-2" />
                          <span style={{ fontFamily: "Signika, sans-serif" }}>
                            No images available
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Room Details */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3
                            className="text-2xl mb-2 text-[#413328]"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {room.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-[#76765c] mb-3">
                            <div className="flex items-center gap-1">
                              <Bed className="w-4 h-4" />
                              <span
                                style={{ fontFamily: "Signika, sans-serif" }}
                              >
                                {room.beds_count}{" "}
                                {room.beds_count === 1 ? "bed" : "beds"}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Maximize className="w-4 h-4" />
                              <span
                                style={{ fontFamily: "Signika, sans-serif" }}
                              >
                                {room.area_sqm} m²
                              </span>
                            </div>
                            {room.has_balcony && (
                              <div className="flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-[#413328]" />
                                <span
                                  style={{ fontFamily: "Signika, sans-serif" }}
                                >
                                  Balcony
                                </span>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              {room.is_smoking ? (
                                <Cigarette className="w-4 h-4" />
                              ) : (
                                <CigaretteOff className="w-4 h-4 text-[#413328]" />
                              )}
                              <span
                                style={{ fontFamily: "Signika, sans-serif" }}
                              >
                                {room.is_smoking
                                  ? "Smoking allowed"
                                  : "Non-smoking"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p
                        className="text-[#76765c] mb-4"
                        style={{ fontFamily: "Nanum Myeongjo, serif" }}
                      >
                        {room.description}
                      </p>

                      <div className="bg-[#ece8e5] p-4 rounded-lg mb-4">
                        <div
                          className="text-sm text-[#76765c] mb-1"
                          style={{ fontFamily: "Signika, sans-serif" }}
                        >
                          Room type
                        </div>
                        <div
                          className="text-[#413328]"
                          style={{ fontFamily: "Signika, sans-serif" }}
                        >
                          {room.room_type}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#d6ccc2]">
                        <div>
                          <div
                            className="text-sm text-[#76765c] mb-1"
                            style={{ fontFamily: "Signika, sans-serif" }}
                          >
                            Price per night
                          </div>
                          <div
                            className="text-2xl text-[#413328]"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {room.base_price}
                          </div>
                        </div>
                        <button
                          onClick={scrollToContact}
                          className="bg-[#413328] text-[#feffff] px-6 py-3 rounded-md hover:bg-[#76765c] transition-colors duration-300 whitespace-nowrap"
                          style={{ fontFamily: "Signika, sans-serif" }}
                        >
                          Reserve Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-[#413328] text-[#feffff] p-8 rounded-lg text-center">
          <h3
            className="text-2xl mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to Book Your Stay?
          </h3>
          <p className="mb-6" style={{ fontFamily: "Signika, sans-serif" }}>
            Contact us directly for special offers and custom packages
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#eddfd4] text-[#413328] px-8 py-3 rounded-md hover:bg-[#d6ccc2] transition-colors duration-300"
            style={{ fontFamily: "Signika, sans-serif" }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
