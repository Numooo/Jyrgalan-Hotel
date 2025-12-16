"use client"

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            guests: '1',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Location',
            content: 'The Kyrgyz Republic, v. Jyrgalan'
        },
        {
            icon: Clock,
            title: 'Response Time',
            content: 'Within 24 hours'
        },
        {
            icon: Phone,
            title: 'Phone',
            content: '+996 550 205 988'
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'info@jyrgalan.com'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-[#ece8e5]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Contact & Booking
                    </h2>
                    <p className="text-lg text-[#76765c] max-w-2xl mx-auto">
                        Get in touch with us or submit a booking inquiry
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#feffff] p-6 rounded-lg shadow-md"
                                    >
                                        <Icon className="w-8 h-8 text-[#413328] mb-3" />
                                        <h4 className="mb-2 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {info.title}
                                        </h4>
                                        <p className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}>
                                            {info.content}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-[#feffff] p-6 rounded-lg shadow-md">
                            <h3 className="mb-4 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Map
                            </h3>
                            <div className="w-full h-64 bg-[#d6ccc2] rounded-lg flex items-center justify-center">
                                <iframe className={'w-full h-full'} src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d5872.997198838416!2d79.00870246684592!3d42.60838053420251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x3887a1f8a4d051dd%3A0x662702001667a450!2sDarya%20Hostel%20Jyrgalan!3m2!1d42.608605399999995!2d79.0084949!4m5!1s0x3887a1ec87d2fb61%3A0xf7a5a1d20fb4ed82!2sJ256%2BQ5G%20Beymaral%20lodge%20Jyrgalan%2C%20Unnamed%20Road%2C%20Jyrgalan!3m2!1d42.6094471!2d79.0104649!4m5!1s0x3887a169c0475cef%3A0x2bc459ab9deb517b!2sPeak%20Lodge!3m2!1d42.6092815!2d79.01856!5e0!3m2!1sen!2skg!4v1765795559580!5m2!1sen!2skg"></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="bg-[#feffff] p-8 rounded-lg shadow-lg">
                        <h3 className="mb-6 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
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
                                    <label htmlFor="checkIn" className="block mb-2 text-[#413328]">
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
                                    <label htmlFor="checkOut" className="block mb-2 text-[#413328]">
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
                                style={{ fontFamily: 'Signika, sans-serif' }}
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