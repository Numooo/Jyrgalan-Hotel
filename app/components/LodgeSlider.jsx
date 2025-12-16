"use client";

import { useEffect, useState } from "react";

export default function LodgeSlider({ images }) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 500);
        }, 4500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full flex">
            <div className="w-full h-64 lg:h-112 overflow-hidden">
                <img
                    src={images[index].url}
                    alt={images[index].title}
                    className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                        fade ? "opacity-100" : "opacity-70"
                    }`}
                />
            </div>
            {images[index].title && (
                <div className="absolute right-6 bottom-6 bg-[#413328]/80 text-[#feffff] px-5 py-3 rounded-md">
                    <p
                        className="text-lg"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {images[index].title}
                    </p>
                </div>
            )}
        </div>
    );
}
