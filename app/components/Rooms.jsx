"use client"

import { Bed, Users, Wifi, Bath, Home, UtensilsCrossed } from 'lucide-react';
import LodgeSlider from "@/app/components/LodgeSlider";

export function Rooms() {
    const lodges = [
        {
            title: 'Darya Hostel',
            subtitle: 'Cozy & Well-Designed',
            price: 'from $15',
            images: [
                {
                    title: 'Dining table',
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-017.jpg',
                },
                {
                    title: 'Relaxing area',
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-018.jpg',
                },
                {
                    title: 'Darak (tree) room',
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-019.jpg',
                },
                {
                    title: 'Jer (soil) room',
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-020.jpg',
                },
                {
                    title: 'Suu (water) room',
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-021.jpg',
                }
            ],
            features: [
                '3 shared rooms (Darak, Jer, Suu)',
                '4 beds per room',
                'Accommodates 12 people',
                'Shared bathroom & kitchen',
                'Terrace with mountain views',
                'Free Wi-Fi'
            ],
            highlights: 'A cozy and well-designed accommodation in Jyrgalan village. Possible to rent the hostel entirely.'
        },
        {
            title: 'Beymaral Lodge',
            subtitle: 'Traditional with Modern Touch',
            price: 'from $40',
            images: [
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-022.jpg',
                },
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-023.jpg',
                },
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-024.jpg',
                },
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-025.jpg',
                }
            ],
            features: [
                '4 comfortable rooms',
                '3 double rooms + 1 family room',
                'Accommodates 9 people',
                'Private bathrooms with amenities',
                'Garden with hot tub/pool',
                'Cozy living & dining rooms'
            ],
            highlights: 'Traditional-style hotel with modern amenities. Features hot tub, garden, and relaxation area after hiking or skiing. Can be rented entirely with kitchen access.'
        },
        {
            title: 'Peak Lodge',
            subtitle: 'Panoramic Mountain Views',
            price: 'from $50',
            images: [
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-026.jpg',
                },
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-027.jpg',
                },
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-028.jpg',
                },
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-030.jpg',
                },
                {
                    url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-031.jpg',
                }
            ],
            features: [
                '3 twin cottages',
                'Private bathrooms',
                'Full amenities package',
                'Mini-fridge & kettle',
                'Peak Restaurant on-site',
                'Bar with drinks & Italian wine'
            ],
            highlights: 'Twin-room cottages with panoramic views. Enjoy evenings in the cozy restaurant offering local and international cuisine, Italian wine, and various beverages.'
        }
    ];

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="rooms" className="py-20 bg-[#ece8e5]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Our Lodges
                    </h2>
                    <p className="text-lg text-[#76765c] max-w-2xl mx-auto">
                        Stay in authentic lodges blending comfort and Kyrgyz charm — Darya Hostel, Beymaral Lodge, and Peak Lodge
                    </p>
                </div>

                <div className="space-y-12">
                    {lodges.map((lodge, index) => (
                        <div
                            key={index}
                            className={`bg-[#feffff] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } flex flex-col lg:flex`}
                        >
                            <div className="lg:w-1/2 h-64 lg:h-auto">
                                <LodgeSlider images={lodge.images} />
                            </div>

                            <div className="lg:w-1/2 p-8 lg:p-12">
                                <div className="mb-6">
                                    <h3 className="text-3xl mb-2 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        {lodge.title}
                                    </h3>
                                    <p className="text-lg text-[#76765c] mb-4" style={{ fontFamily: 'Signika, sans-serif' }}>
                                        {lodge.subtitle}
                                    </p>
                                    <p className="text-[#76765c] mb-4">
                                        {lodge.highlights}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {lodge.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-[#76765c]">
                                            <span className="text-[#413328] mr-2">•</span>
                                            <span style={{ fontFamily: 'Signika, sans-serif' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-[#d6ccc2]">
                                    <div>
                    <span className="text-2xl text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {lodge.price}
                    </span>
                                        <span className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}> / night</span>
                                    </div>
                                    <button
                                        onClick={scrollToContact}
                                        className="bg-[#413328] text-[#feffff] px-6 py-3 rounded-md hover:bg-[#76765c] transition-colors duration-300"
                                        style={{ fontFamily: 'Signika, sans-serif' }}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Amenities Summary */}
                <div className="mt-16 bg-[#feffff] p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl mb-6 text-[#413328] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Standard Amenities Across All Lodges
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col items-center">
                            <Bath className="w-10 h-10 text-[#413328] mb-2" />
                            <p className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}>Towels & Toiletries</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Home className="w-10 h-10 text-[#413328] mb-2" />
                            <p className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}>Bathrobes & Slippers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Wifi className="w-10 h-10 text-[#413328] mb-2" />
                            <p className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}>Free Wi-Fi</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <UtensilsCrossed className="w-10 h-10 text-[#413328] mb-2" />
                            <p className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}>Dining Options</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
