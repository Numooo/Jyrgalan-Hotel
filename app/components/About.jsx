import { Award, Users, Heart, Star } from 'lucide-react';

export function About() {
    const features = [
        {
            icon: Award,
            title: 'Hidden Gem',
            description: 'A pristine destination in the Issyk-Kul region offering authentic experiences away from crowds'
        },
        {
            icon: Users,
            title: 'Local Hospitality',
            description: 'Experience genuine Kyrgyz warmth and traditions with local families'
        },
        {
            icon: Heart,
            title: 'Eco-Tourism',
            description: 'Sustainable tourism supporting local communities and preserving nature'
        },
        {
            icon: Star,
            title: 'Alpine Beauty',
            description: 'Stunning landscapes with alpine meadows, lakes, and pristine waterfalls'
        }
    ];

    return (
        <section id="about" className="py-20 bg-[#ece8e5]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Why Jyrgalan?
                    </h2>
                    <p className="text-lg text-[#76765c] max-w-2xl mx-auto">
                        A hidden gem in the Issyk-Kul region — Jyrgalan offers pristine landscapes, alpine meadows, and local hospitality.
                        Ideal for those seeking authentic experiences away from crowds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#feffff] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#eddfd4] rounded-full mb-4">
                                    <Icon className="w-8 h-8 text-[#413328]" />
                                </div>
                                <h3 className="mb-3 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-[#76765c]" style={{ fontFamily: 'Signika, sans-serif' }}>
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Eco-Tourism Section */}
                <div className="mt-16 bg-[#feffff] p-8 md:p-12 rounded-lg shadow-lg">
                    <h3 className="text-3xl mb-4 text-[#413328] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Eco-Tourism & Sustainability
                    </h3>
                    <p className="text-lg text-[#76765c] text-center max-w-3xl mx-auto" style={{ fontFamily: 'Signika, sans-serif' }}>
                        Jyrgalan promotes sustainable tourism by supporting local families and preserving nature — ensuring the valley remains a haven for generations to come
                    </p>
                </div>
            </div>
        </section>
    );
}