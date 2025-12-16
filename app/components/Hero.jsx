"use client"

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
                    alt="Grand Hotel Lobby"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#060504] opacity-50"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl mb-6 text-[#eddfd4]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Welcome to the <br/> Jyrgalan Hotel
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-[#feffff]">
                    Where comfort meets silence and nature
                </p>
                <button
                    onClick={scrollToContact}
                    className="bg-[#eddfd4] text-[#413328] px-16 py-4 rounded-md hover:bg-[#d6ccc2] transition-all duration-300 transform hover:scale-105"
                    style={{ fontFamily: 'Signika, sans-serif' }}
                >
                    Book Now!
                </button>
            </div>
        </section>
    );
}
