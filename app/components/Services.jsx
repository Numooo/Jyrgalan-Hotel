import { Wifi, Coffee, Dumbbell, Utensils, Car, Wind } from 'lucide-react';

export function Services() {
    const services = [
        {
            icon: Utensils,
            title: 'Horseback Riding',
            description: 'Explore the valley on horseback with local guides'
        },
        {
            icon: Dumbbell,
            title: 'Hiking',
            description: 'Trek through alpine meadows and pristine trails'
        },
        {
            icon: Wind,
            title: 'Freeride Skiing',
            description: 'Experience world-class skiing in untouched powder'
        },
        {
            icon: Coffee,
            title: 'Mountain Biking',
            description: 'Ride through spectacular mountain landscapes'
        },
        {
            icon: Car,
            title: 'Cultural Tours',
            description: 'Discover local traditions and cultural treasures'
        },
        {
            icon: Wifi,
            title: 'Natural Wonders',
            description: 'Visit stunning lakes and waterfalls with guides'
        }
    ];

    return (
        <section id="services" className="py-20 bg-[#feffff]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Nature & Experiences
                    </h2>
                    <p className="text-lg text-[#76765c] max-w-2xl mx-auto">
                        Enjoy horseback riding, hiking, freeride skiing, and biking. Explore lakes, waterfalls, and cultural treasures with local guides
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-[#ece8e5] p-6 rounded-lg hover:bg-[#eddfd4] transition-colors duration-300"
                                >
                                    <Icon className="w-10 h-10 text-[#413328] mb-3" />
                                    <h3 className="mb-2 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}>
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1764967112006-4e4631abd58e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZWJhY2slMjByaWRpbmclMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY1Nzg1OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Horseback Riding in Jyrgalan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}