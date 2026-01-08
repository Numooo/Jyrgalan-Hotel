"use client";

import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { useAddBooking } from "@/stores/bookingStore";
import { useGetContacts, useContacts } from "@/stores/contactStore";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
  });
  const addBooking = useAddBooking();
  const getContacts = useGetContacts();
  const contacts = useContacts();
  useEffect(() => {
    void getContacts();
  }, [getContacts]);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "1",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#ece8e5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#413328]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact & Booking
          </h2>
          <p className="text-lg text-[#76765c] max-w-2xl mx-auto">
            Get in touch with us or submit a booking inquiry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {contacts.map((info) => (
            <div key={info.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Address */}
                <div className="bg-[#feffff] p-6 rounded-lg shadow-md">
                  <MapPin className="w-8 h-8 text-[#413328] mb-3" />
                  <h4
                    className="mb-2 text-[#413328]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Address
                  </h4>
                  <p
                    className="text-[#76765c]"
                    style={{ fontFamily: "Signika, sans-serif" }}
                  >
                    {info.address}
                  </p>
                </div>

                {/* Email */}
                <div className="bg-[#feffff] p-6 rounded-lg shadow-md">
                  <Mail className="w-8 h-8 text-[#413328] mb-3" />
                  <h4 className="mb-2 text-[#413328]">Email</h4>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-[#76765c] hover:underline"
                  >
                    {info.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-[#feffff] p-6 rounded-lg shadow-md">
                  <Phone className="w-8 h-8 text-[#413328] mb-3" />
                  <h4 className="mb-2 text-[#413328]">Phone</h4>
                  <a
                    href={`tel:${info.phone}`}
                    className="text-[#76765c] hover:underline"
                  >
                    {info.phone}
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="bg-[#feffff] p-6 rounded-lg shadow-md">
                  <MessageCircle className="w-8 h-8 text-[#413328] mb-3" />
                  <h4 className="mb-2 text-[#413328]">WhatsApp</h4>
                  <a
                    href={`https://wa.me/${info.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#76765c] hover:underline"
                  >
                    {info.whatsapp}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-[#feffff] p-6 rounded-lg shadow-md">
                <h3
                  className="mb-4 text-[#413328]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Map
                </h3>

                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full border-0"
                    src={info.map_location}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="bg-[#feffff] p-8 rounded-lg shadow-lg">
            <h3
              className="mb-6 text-[#413328]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Booking Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-[#413328]">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d6ccc2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#76765c] bg-[#feffff]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-[#413328]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#d6ccc2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#76765c] bg-[#feffff]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-[#413328]">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#d6ccc2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#76765c] bg-[#feffff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="checkIn"
                    className="block mb-2 text-[#413328]"
                  >
                    Check-in *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#d6ccc2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#76765c] bg-[#feffff]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="checkOut"
                    className="block mb-2 text-[#413328]"
                  >
                    Check-out *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#d6ccc2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#76765c] bg-[#feffff]"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block mb-2 text-[#413328]">
                    Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#d6ccc2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#76765c] bg-[#feffff]"
                  >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-[#413328]">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#d6ccc2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#76765c] bg-[#feffff] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#413328] text-[#feffff] px-8 py-4 rounded-md hover:bg-[#76765c] transition-colors duration-300"
                style={{ fontFamily: "Signika, sans-serif" }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
