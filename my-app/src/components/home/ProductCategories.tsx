import Link from "next/link";
import { ArrowRight, Utensils, Circle, Square, Package } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductCategories = () => {
  const categories = [
    {
      name: "Wooden Cutlery",
      description: "Premium wooden spoons, forks, and knives",
      icon: Utensils,
      href: "/products?category=cutlery",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      color: "bg-amber-50",
    },
    {
      name: "Plates & Bowls",
      description: "Beautiful wooden and bamboo dinnerware",
      icon: Circle,
      href: "/products?category=plates",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop&crop=center",
      color: "bg-green-50",
    },
    {
      name: "Tableware Sets",
      description: "Complete dining sets for every occasion",
      icon: Square,
      href: "/products?category=sets",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
      color: "bg-orange-50",
    },
    {
      name: "Eco Packaging",
      description: "Sustainable packaging solutions",
      icon: Package,
      href: "/products?category=packaging",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop&crop=center",
      color: "bg-stone-50",
    },
  ];

  return (
    <section className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
            Our Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of sustainable tableware, crafted from nature&apos;s finest materials
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
          
                    {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-headings mb-2 group-hover:text-primary-accent transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary-accent hover:bg-primary-accent/90 text-primary-foreground font-medium px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link href="/products" className="inline-flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
