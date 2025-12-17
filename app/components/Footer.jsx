"use client"
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#413328] text-[#feffff] pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl mb-4 text-[#eddfd4]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Jyrgalan Valley
                        </h3>
                        <p className="text-[#d6ccc2] mb-4" style={{ fontFamily: 'Signika, sans-serif' }}>
                            Experience authentic Kyrgyz hospitality in pristine alpine landscapes. Stay in our unique lodges and explore nature's wonders.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-[#eddfd4] rounded-full flex items-center justify-center hover:bg-[#d6ccc2] transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-[#413328]" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-[#eddfd4] rounded-full flex items-center justify-center hover:bg-[#d6ccc2] transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-[#413328]" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-[#eddfd4] rounded-full flex items-center justify-center hover:bg-[#d6ccc2] transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-[#413328]" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-[#eddfd4]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2" style={{ fontFamily: 'Signika, sans-serif' }}>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#hero')}
                                    className="text-[#d6ccc2] hover:text-[#eddfd4] transition-colors duration-300"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#about')}
                                    className="text-[#d6ccc2] hover:text-[#eddfd4] transition-colors duration-300"
                                >
                                    About Jyrgalan
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#services')}
                                    className="text-[#d6ccc2] hover:text-[#eddfd4] transition-colors duration-300"
                                >
                                    Experiences
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#rooms')}
                                    className="text-[#d6ccc2] hover:text-[#eddfd4] transition-colors duration-300"
                                >
                                    Our Lodges
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 text-[#eddfd4]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Our Lodges
                        </h4>
                        <ul className="space-y-2 text-[#d6ccc2]" style={{ fontFamily: 'Signika, sans-serif' }}>
                            <li>Darya Hostel</li>
                            <li>Beymaral Lodge</li>
                            <li>Peak Lodge</li>
                            <li>Peak Restaurant</li>
                            <li>Hot Tub & Spa</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-[#eddfd4]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Contact
                        </h4>
                        <ul className="space-y-3" style={{ fontFamily: 'Signika, sans-serif' }}>
                            <li className="flex items-start text-[#d6ccc2]">
                                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>info@jyrgalan.com</span>
                            </li>
                            <li className="flex items-start text-[#d6ccc2]">
                                <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>+996 XXX XXX XXX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#76765c] text-center">
                    <p className="text-[#d6ccc2]" style={{ fontFamily: 'Signika, sans-serif' }}>
                        © {currentYear} Jyrgalan Valley Lodges. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}