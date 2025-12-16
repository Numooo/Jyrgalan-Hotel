
export function Gallery() {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1662454456003-f6cae5b7b516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreXJneXpzdGFuJTIwbW91bnRhaW5zJTIwdmFsbGV5fGVufDF8fHx8MTc2NTc4NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            title: 'Jyrgalan Valley'
        },
        {
            url: 'https://images.unsplash.com/photo-1590252498256-9288ee3a7b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBtZWFkb3clMjBoa2ltaW5n8ZW58MXx8fHwxNzY1Nzg1OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            title: 'Alpine Meadows'
        },
        {
            url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-008.jpg',
            title: 'Horseback Riding'
        },
        {
            url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-015.jpg',
            title: 'Lodge Interiors'
        },
        {
            url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-028.jpg',
            title: 'Comfortable Rooms'
        },
        {
            url: '/img/Jyrgalan_Valley_Presentation_2.pdf-image-010.jpg',
            title: 'Different Activities'
        }
    ];

    return (
        <section id="gallery" className="py-20 bg-[#feffff]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-[#413328]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Gallery
                    </h2>
                    <p className="text-lg text-[#76765c] max-w-2xl mx-auto">
                        Discover the beauty of Jyrgalan Valley and our authentic lodges
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg group h-64 sm:h-80"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#413328] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center pb-8">
                                <h3 className="text-[#eddfd4]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}