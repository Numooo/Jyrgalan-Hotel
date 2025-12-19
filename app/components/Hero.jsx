"use client";

import Lottie from "lottie-react";
import bgbirds from "@/public/img/Bird Flock (Test).json";

export function Hero() {
    const scrollToContact = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        >
            {/* LOTTIE BACKGROUND */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Lottie
                    animationData={bgbirds}
                    loop
                    autoplay
                    className="w-full h-full"
                    rendererSettings={{
                        preserveAspectRatio: "xMidYMid slice",
                    }}
                />
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#060504]/60 -z-10" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1
                    className="text-5xl md:text-7xl mb-6 text-[#eddfd4]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    Welcome to Jyrgalan Valley
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-[#feffff]">
                    A hidden gem in the Issyk-Kul region — pristine landscapes, alpine
                    meadows, and authentic local hospitality
                </p>

                <button
                    onClick={scrollToContact}
                    className="bg-[#eddfd4] text-[#413328] px-8 py-4 rounded-md
                     hover:bg-[#d6ccc2] transition-all duration-300
                     transform hover:scale-105"
                    style={{ fontFamily: "Signika, sans-serif" }}
                >
                    Book Your Stay
                </button>
            </div>
        </section>
    );
}
