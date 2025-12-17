"use client"
import { motion } from 'framer-motion';

export function Hero() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1662454456003-f6cae5b7b516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreXJneXpzdGFuJTIwbW91bnRhaW5zJTIwdmFsbGV5fGVufDF8fHx8MTc2NTc4NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Jyrgalan Valley"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#060504] opacity-50"></div>
            </div>

            {/* Animated Eagle */}
            <motion.div
                className="left-1/2 top-1/7 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none relative w-32 h-32 md:w-40 md:h-40"
                initial={{ x: '150vw', y: '-200px' }}
                animate={{
                    x: ['150vw', '0px', '0px', '0px', '150vw'],
                    y: ['-200px', '-200px', '-200px', '-200px', '-200px']
                }}
                transition={{
                    duration: 8,
                    times: [0, 0.25, 0.5, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                }}
            >
                {/* Flying Eagle - Coming */}
                <motion.div
                    className="absolute inset-0 z-10"
                    animate={{
                        opacity: [1, 1, 0, 0, 0],
                        scaleX: [1, 1, 1, 1, 1]
                    }}
                    transition={{
                        duration: 8,
                        times: [0, 0.24, 0.25, 0.75, 1],
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                    }}
                >
                    <img
                        src="https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-a-majestic-bald-eagle-soaring-with-outstretched-wings-showcasing-its-white-png-image_16174496.png"
                        alt="Flying Eagle"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Sitting Eagle */}
                <motion.div
                    className="absolute inset-0 z-20"
                    animate={{
                        opacity: [0, 0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 8,
                        times: [0, 0.24, 0.25, 0.74, 0.75],
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                    }}
                >
                    <img
                        src="https://png.pngtree.com/png-vector/20241110/ourmid/pngtree-the-eagle-is-sitting-png-image_14387081.png"
                        alt="Sitting Eagle"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Flying Eagle - Leaving (Mirrored) */}
                <motion.div
                    className="absolute inset-0 z-10"
                    animate={{
                        opacity: [0, 0, 0, 0, 1],
                        scaleX: [-1, -1, -1, -1, -1]
                    }}
                    transition={{
                        duration: 8,
                        times: [0, 0.24, 0.5, 0.74, 0.75],
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                    }}
                >
                    <img
                        src="https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-a-majestic-bald-eagle-soaring-with-outstretched-wings-showcasing-its-white-png-image_16174496.png"
                        alt="Flying Eagle Leaving"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </motion.div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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