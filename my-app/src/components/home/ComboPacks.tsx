import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ComboPacks = () => {
    const packs = [
        {
            name: "Normal Combo Pack",
            items: [
                "14'' inch Buffet Plate",
                "15'' inch Sitting Plate",
                "10'' Inch Breakfast Plate",
                "14'' inch Meal Trays",
                "4'' Inch Bowls",
                "Spoons & Forks",
            ],
            // Using a reliable table setting image
            image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop",
            isPremium: false,
            textPosition: "left",
        },
        {
            name: "Premium Combo Pack",
            items: [
                "14'' inch Buffet Plate Premium",
                "15'' inch Sitting Plate",
                "10'' Inch Breakfast Plate",
                "14'' Meal Trays (Slotted)",
                "4'' Inch Bowls",
                "Spoons & Forks",
            ],
            // Using a different high quality image
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
            isPremium: true,
            textPosition: "right",
        },
    ];

    return (
        <section className="py-16 bg-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center font-heading font-bold text-headings mb-6">
                    Value Combo Packs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packs.map((pack) => (
                        <div
                            key={pack.name}
                            className="relative overflow-hidden rounded-3xl h-[500px] shadow-lg group border border-gray-100"
                        >
                            <Image
                                src={pack.image}
                                alt={pack.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Subtle Overlay to ensure text readability only on the text side */}
                            <div
                                className={`absolute inset-0 transition-opacity duration-300 ${pack.textPosition === 'left'
                                    ? 'bg-gradient-to-r from-black/70 via-black/30 to-transparent'
                                    : 'bg-gradient-to-l from-black/70 via-black/30 to-transparent'
                                    }`}
                            />

                            <div className={`absolute inset-y-0 ${pack.textPosition === 'left' ? 'left-0' : 'right-0'} w-full md:w-3/4 p-8 flex flex-col justify-center text-white`}>
                                <div className={`${pack.textPosition === 'right' ? 'text-right items-end' : 'text-left items-start'} flex flex-col`}>
                                    <div className="text-2xl md:text-3xl text-white font-bold mb-2">{pack.name}</div>
                                    {pack.isPremium && (
                                        <span className="bg-primary-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                                            PREMIUM
                                        </span>
                                    )}

                                    <ul className={`space-y-1.5 mb-6 text-white/90 ${pack.textPosition === 'right' ? 'text-right' : 'text-left'}`}>
                                        {pack.items.map((item, idx) => (
                                            <li key={idx} className="text-sm md:text-base">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-2 rounded-full shadow-md transition-transform active:scale-95">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComboPacks;
