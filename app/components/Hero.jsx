"use client"
import birds from "@/public/img/Bird Flock.json";
import Lottie from "lottie-react";

export function Hero() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '690px',
                    height: '690px',
                    pointerEvents: 'none',
                    zIndex: 10,
                }}
            >
                <Lottie
                    animationData={birds}
                    loop
                    style={{ width: '100%', height: '50%' }}
                />
            </div>

            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1662454456003-f6cae5b7b516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Jyrgalan Valley"
                    className="w-full h-full object-cover scale-x-[-1]"
                />
                <div className="absolute inset-0 bg-[#060504] opacity-50"></div>
            </div>

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl mb-6 text-[#eddfd4]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Welcome to Jyrgalan Valley
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-[#feffff]">
                    A hidden gem in the Issyk-Kul region — pristine landscapes, alpine meadows, and authentic local hospitality
                </p>
                <button
                    onClick={scrollToContact}
                    className="bg-[#eddfd4] text-[#413328] px-8 py-4 rounded-md hover:bg-[#d6ccc2] transition-all duration-300 transform hover:scale-105"
                    style={{ fontFamily: 'Signika, sans-serif' }}
                >
                    Book Your Stay
                </button>
            </div>
        </section>
    );
}
