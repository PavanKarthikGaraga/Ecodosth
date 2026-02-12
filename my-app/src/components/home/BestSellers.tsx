"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products } from "@/data/products";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const BestSellers = () => {
  return (
    <section className="py-16 bg-bg" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <ScrollAnimation direction="up" duration={0.8} distance={80}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
              Our Products
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1} duration={0.8} distance={80}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sustainable, eco-friendly tableware for every occasion.
            </p>
          </ScrollAnimation>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {products.map((product, index) => {
            // Calculate min unit price
            const minUnitPrice = Math.min(...product.variants.map(v => {
              const packMatch = v.attributes.pack?.match(/Pack of (\d+)/i);
              const packSize = packMatch ? parseInt(packMatch[1]) : 1;
              return v.price / packSize;
            }));

            // Calculate min original unit price (if valid)
            const minOriginalUnitPrice = Math.min(...product.variants.map(v => {
              const packMatch = v.attributes.pack?.match(/Pack of (\d+)/i);
              const packSize = packMatch ? parseInt(packMatch[1]) : 1;
              return v.originalPrice / packSize;
            }));

            return (
              <ScrollAnimation
                key={product.id}
                direction="up"
                delay={index * 0.15}
                duration={0.8}
                distance={100}
                className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.5rem)]"
              >
                <Link
                  href={`/product/${product.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 block h-full"
                >
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur text-primary-accent text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full z-10 shadow-sm">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-6">
                    <h3 className="text-sm md:text-xl font-heading font-bold text-headings mb-1 md:mb-2 hover:text-primary-accent transition-colors line-clamp-1 md:line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center space-x-2 md:space-x-3 flex-wrap">
                      <span className="text-sm md:text-lg font-bold text-primary-accent">
                        From ₹{minUnitPrice.toFixed(2)} / piece
                      </span>
                      {minOriginalUnitPrice > minUnitPrice && (
                        <span className="text-xs md:text-sm text-muted-foreground line-through">
                          ₹{minOriginalUnitPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
