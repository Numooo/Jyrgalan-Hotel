"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Main', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Rooms', href: '#rooms' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contants', href: '#contact' }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="bg-[#413328] text-[#feffff] sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-3xl tracking-wider text-[#eddfd4] text-nowrap" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Jyrgalan Hotel
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8 w-full justify-between">
                        <nav className={'flex justify-center w-full gap-10'}>
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="hover:text-[#eddfd4] transition-colors duration-300"
                                    style={{ fontFamily: 'Signika, sans-serif' }}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="bg-[#eddfd4] text-[#413328] text-nowrap px-6 py-2 rounded-md hover:bg-[#d6ccc2] transition-colors duration-300"
                            style={{ fontFamily: 'Signika, sans-serif' }}
                        >
                            Book Now!
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left hover:text-[#eddfd4] transition-colors duration-300"
                                style={{ fontFamily: 'Signika, sans-serif' }}
                            >
                                {item.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="w-full bg-[#eddfd4] text-[#413328] text-nowrap px-6 py-2 rounded-md hover:bg-[#d6ccc2] transition-colors duration-300"
                            style={{ fontFamily: 'Signika, sans-serif' }}
                        >
                            Book Now!
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}
