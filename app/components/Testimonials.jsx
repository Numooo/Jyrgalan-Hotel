import Image from "next/image";

const testimonials = [
    {
        name: "Enrica",
        country: "Italy",
        rating: 5,
        text: `Located in Jyrgalan village, this place offers a peaceful atmosphere with cold nights and homemade warm food. Supportive staff enhance the experience, while nearby hiking spots like Kok-Bell waterfall and a lake provide beautiful views.`,
        avatar: "/avatars/enrica.jpg",
    },
    {
        name: "Aranzazu",
        country: "Spain",
        rating: 5,
        text: `Comfortable double room, and very nice common areas too. Everything was clean and well kept. Owners were very friendly. Food was so tasty.`,
        avatar: "/avatars/aranzazu.jpg",
    },
    {
        name: "Scott",
        country: "Netherlands",
        rating: 5,
        text: `Warm, magnanimous hospitality. Delicious food. Sublime scenery. A place to disconnect from the modern world and find the Kyrgyz soul. Highly recommend.`,
        avatar: "/avatars/scott.jpg",
    },
    {
        name: "Victoria",
        country: "United Kingdom",
        rating: 5,
        text: `Large and comfortable room, decent wifi, excellent multi course home cooked meals`,
        avatar: "/avatars/victoria.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full bg-[#f6f3ee]">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[260px] md:h-[320px]">
                    <Image
                        src="/images/group.jpg"
                        alt="Guests"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex items-center bg-[#7a7a5f] px-10 md:px-16">
                    <h2
                        className="text-white text-4xl md:text-5xl leading-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Client <br /> Testimonials
                    </h2>
                </div>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#e7e1d8] text-center px-6 pt-14 pb-10 relative"
                        >
                            {/* Avatar */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f6f3ee]">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        width={80}
                                        height={80}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <h3 className="font-semibold text-lg mt-2">{t.name}</h3>
                            <p className="uppercase text-xs tracking-widest text-gray-600 mb-2">
                                {t.country}
                            </p>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, idx) => (
                                    <span key={idx} className="text-black text-sm">
                    ★
                  </span>
                                ))}
                            </div>

                            <p className="text-sm leading-relaxed text-gray-800">
                                {t.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
