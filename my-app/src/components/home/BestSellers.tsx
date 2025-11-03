import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BestSellers = () => {
  const bestSellers = [
    {
      id: "wooden-spork-white",
      name: "4\" Wooden Spork - White",
      price: 25,
      originalPrice: 30,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center",
      badge: "Best Seller",
    },
    {
      id: "wooden-spork-green",
      name: "4\" Wooden Spork - Green",
      price: 25,
      originalPrice: 30,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center",
      badge: "Eco Choice",
    },
    {
      id: "square-plate",
      name: "10\" Square Plate",
      price: 45,
      originalPrice: 55,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&h=300&fit=crop&crop=center",
      badge: "Popular",
    },
    {
      id: "round-plate",
      name: "10\" Round Plate",
      price: 42,
      originalPrice: 50,
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center",
      badge: "New",
    },
  ];

  return (
    <section className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most loved products, trusted by thousands of eco-conscious customers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="aspect-square bg-card-accent relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary-accent text-primary-foreground text-xs font-medium px-2 py-1 rounded-full z-10">
                  {product.badge}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Button size="sm" className="bg-white text-primary-accent hover:bg-white/90">
                    Quick View
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-headings mb-2 group-hover:text-primary-accent transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-heading font-bold text-headings">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
