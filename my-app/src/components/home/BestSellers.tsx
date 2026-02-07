import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BestSellers = () => {
  const bestSellers = [
    {
      id: "wooden-spork-white",
      name: "4\" Wooden Spork - White",
      price: 25,
      originalPrice: 30,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center",
      badge: "Best Seller",
    },
    {
      id: "wooden-spork-green",
      name: "4\" Wooden Spork - Green",
      price: 25,
      originalPrice: 30,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center",
      badge: "Eco Choice",
    },
    {
      id: "square-plate",
      name: "10\" Square Plate",
      price: 45,
      originalPrice: 55,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&h=300&fit=crop&crop=center",
      badge: "Popular",
    },
    {
      id: "round-plate",
      name: "10\" Round Plate",
      price: 42,
      originalPrice: 50,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center",
      badge: "New",
    },
  ];

  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
            Best Sellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary-accent text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-headings mb-2 hover:text-primary-accent transition-colors cursor-pointer">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-primary-accent">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-primary-foreground">
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
