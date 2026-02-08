import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products } from "@/data/products";

const BestSellers = () => {
  return (
    <section className="py-16 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sustainable, eco-friendly tableware for every occasion.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const startPrice = Math.min(...product.variants.map(v => v.price));
            const originalPrice = Math.min(...product.variants.map(v => v.originalPrice));

            return (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 block"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary-accent text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-headings mb-2 hover:text-primary-accent transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-primary-accent">
                      From ₹{startPrice}
                    </span>
                    {originalPrice > startPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
