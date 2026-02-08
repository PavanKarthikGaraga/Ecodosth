
export interface ProductVariant {
    id: string;
    price: number;
    originalPrice: number;
    inStock: boolean;
    attributes: {
        quality?: "Standard" | "Premium";
        size?: string; // e.g., "14 inch", "10 inch"
        weight?: string; // e.g., "80gsm", "100gsm", "120gsm"
    };
}

export interface Product {
    id: string;
    name: string;
    description: string;
    category: "plates" | "bowls" | "cutlery" | "trays";
    badge?: string;
    ecoFriendly: boolean;
    images: string[];
    features: string[];
    specifications: Record<string, string>;
    ecoBenefits: string[];
    variants: ProductVariant[];
    rating: number;
    reviews: number;
}

export const products: Product[] = [
    // 1. 14" Buffet Plate
    {
        id: "buffet-plate-14",
        name: "14\" Buffet Plate",
        description: "Large, sturdy buffet plate perfect for heavy meals and events. Available in multiple weights for different durability needs.",
        category: "plates",
        badge: "Best Seller",
        ecoFriendly: true,
        rating: 4.8,
        reviews: 156,
        images: [
            "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center",
        ],
        features: [
            "100% biodegradable and compostable",
            "Microwave and refrigerator safe",
            "Sturdy and leak-proof",
            "Chemical-free manufacturing"
        ],
        specifications: {
            "Material": "Areca Palm Leaf",
            "Shape": "Round",
            "Origin": "India"
        },
        ecoBenefits: [
            "Save 150g plastic per plate",
            "Composts in 90 days",
            "Supports rural employment"
        ],
        variants: [
            {
                id: "buffet-14-std-80",
                price: 8,
                originalPrice: 10,
                inStock: true,
                attributes: { quality: "Standard", size: "14 inch", weight: "80gsm" }
            },
            {
                id: "buffet-14-std-100",
                price: 9,
                originalPrice: 11,
                inStock: true,
                attributes: { quality: "Standard", size: "14 inch", weight: "100gsm" }
            },
            {
                id: "buffet-14-std-120",
                price: 10,
                originalPrice: 12,
                inStock: true,
                attributes: { quality: "Standard", size: "14 inch", weight: "120gsm" }
            },
            {
                id: "buffet-14-prem-120",
                price: 12,
                originalPrice: 15,
                inStock: true,
                attributes: { quality: "Premium", size: "14 inch", weight: "120gsm" }
            }
        ]
    },

    // 2. 15" Sitting Plate
    {
        id: "sitting-plate-15",
        name: "15\" Sitting Plate",
        description: "Extra-large sitting plate designed for traditional seated dining. Maximum surface area for a complete meal spread.",
        category: "plates",
        badge: "Unique",
        ecoFriendly: true,
        rating: 4.9,
        reviews: 45,
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
        ],
        features: [
            "Extra large diameter",
            "Excellent heat resistance",
            "Natural wood-like texture"
        ],
        specifications: {
            "Material": "Areca Palm Leaf",
            "Shape": "Round",
            "Origin": "India"
        },
        ecoBenefits: [
            "Sustainable alternative to large metal/plastic thalis",
            "Made from fallen leaves"
        ],
        variants: [
            {
                id: "sitting-15-std",
                price: 15,
                originalPrice: 18,
                inStock: true,
                attributes: { quality: "Standard", size: "15 inch", weight: "Standard" }
            }
        ]
    },

    // 3. 10" Breakfast Plate
    {
        id: "breakfast-plate-10",
        name: "10\" Breakfast Plate",
        description: "Versatile medium-sized plate, ideal for breakfasts, light lunches, or appetizers.",
        category: "plates",
        ecoFriendly: true,
        rating: 4.7,
        reviews: 89,
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center",
        ],
        features: [
            "Lightweight yet durable",
            "Perfect for dry and semi-gravy items"
        ],
        specifications: {
            "Material": "Areca Palm Leaf",
            "Shape": "Round",
            "Origin": "India"
        },
        ecoBenefits: [
            "Home compostable",
            "Zero chemical bleach used"
        ],
        variants: [
            {
                id: "breakfast-10-std-80",
                price: 5,
                originalPrice: 6,
                inStock: true,
                attributes: { quality: "Standard", size: "10 inch", weight: "80gsm" }
            },
            {
                id: "breakfast-10-std-100",
                price: 6,
                originalPrice: 7,
                inStock: true,
                attributes: { quality: "Standard", size: "10 inch", weight: "100gsm" }
            },
            {
                id: "breakfast-10-std-120",
                price: 7,
                originalPrice: 8,
                inStock: true,
                attributes: { quality: "Standard", size: "10 inch", weight: "120gsm" }
            },
            {
                id: "breakfast-10-prem-120",
                price: 8,
                originalPrice: 10,
                inStock: true,
                attributes: { quality: "Premium", size: "10 inch", weight: "120gsm" }
            }
        ]
    },

    // 4. Meal Trays (Slotted Plate)
    {
        id: "meal-tray-slotted",
        name: "Meal Tray (Slotted)",
        description: "Convenient detailed meal tray with compartments for organizing different food items. Ideal for set meals.",
        category: "trays",
        ecoFriendly: true,
        rating: 4.6,
        reviews: 62,
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center",
        ],
        features: [
            "Multiple compartments",
            "Prevents food mixing",
            "Rigid construction"
        ],
        specifications: {
            "Material": "Areca Palm Leaf",
            "Compartments": "3-5",
            "Origin": "India"
        },
        ecoBenefits: [
            "Replaces styrofoam section plates",
            "Biodegradable"
        ],
        variants: [
            {
                id: "meal-tray-std",
                price: 12,
                originalPrice: 14,
                inStock: true,
                attributes: { quality: "Standard", size: "Standard" }
            }
        ]
    },

    // 5. Idly Cooking Trays
    {
        id: "idly-tray",
        name: "Idly Cooking Tray",
        description: "Natural steaming tray for Idlys. Safe for high-temperature steaming without leaching chemicals.",
        category: "trays",
        ecoFriendly: true,
        rating: 4.5,
        reviews: 28,
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
        ],
        features: [
            "Steam safe",
            "Natural non-stick properties",
            "Healthy cooking alternative"
        ],
        specifications: {
            "Material": "Areca Palm Leaf",
            "Usage": "Steaming",
            "Origin": "India"
        },
        ecoBenefits: [
            "No plastic leaching",
            "Compostable after use"
        ],
        variants: [
            {
                id: "idly-tray-std",
                price: 15,
                originalPrice: 18,
                inStock: true,
                attributes: { quality: "Standard", size: "Standard" }
            }
        ]
    },

    // 6. Bowls
    {
        id: "bowl-6",
        name: "6\" Areca Bowl",
        description: "Deep, leak-proof bowl perfect for soups, dals, desserts, and gravies.",
        category: "bowls",
        ecoFriendly: true,
        rating: 4.8,
        reviews: 110,
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center",
        ],
        features: [
            "Leak-proof design",
            "Holds hot liquids well",
            "Elegant natural look"
        ],
        specifications: {
            "Material": "Areca Palm Leaf",
            "Size": "6 inches",
            "Origin": "India"
        },
        ecoBenefits: [
            "Plastic-free liquid containment",
            "100% natural"
        ],
        variants: [
            {
                id: "bowl-6-std",
                price: 4,
                originalPrice: 5,
                inStock: true,
                attributes: { quality: "Standard", size: "6 inch" }
            }
        ]
    },

    // 7. Cutlery
    {
        id: "wooden-spork",
        name: "Wooden Spork",
        description: "Eco-friendly alternative to plastic cutlery. Smooth finish, splinter-free, and sturdy.",
        category: "cutlery",
        ecoFriendly: true,
        rating: 4.7,
        reviews: 300,
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center",
        ],
        features: [
            "Smooth finish",
            "No splintering",
            "Taste-neutral"
        ],
        specifications: {
            "Material": "Birch Wood",
            "Length": "140mm / 160mm",
            "Origin": "India"
        },
        ecoBenefits: [
            "Replaces single-use plastic",
            "FSC certified wood source"
        ],
        variants: [
            {
                id: "spork-140",
                price: 2,
                originalPrice: 3,
                inStock: true,
                attributes: { quality: "Standard", size: "140mm" }
            },
            {
                id: "spork-160",
                price: 3,
                originalPrice: 4,
                inStock: true,
                attributes: { quality: "Standard", size: "160mm" }
            }
        ]
    }
];
