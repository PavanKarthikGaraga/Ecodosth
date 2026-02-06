import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const products = [
    {
      id: "wooden-spork-white",
      name: "4\" Wooden Spork - White",
      price: 25,
      originalPrice: 30,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      category: "cutlery",
      badge: "Best Seller",
      ecoFriendly: true,
      description: "Premium wooden spork perfect for camping, picnics, and eco-conscious dining."
    },
    {
      id: "wooden-spork-green",
      name: "4\" Wooden Spork - Green",
      price: 25,
      originalPrice: 30,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
      category: "cutlery",
      badge: "Eco Choice",
      ecoFriendly: true,
      description: "Sustainable green-tinted wooden spork for nature lovers."
    },
    {
      id: "square-plate",
      name: "10\" Square Plate",
      price: 45,
      originalPrice: 55,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=400&fit=crop&crop=center",
      category: "plates",
      badge: "Popular",
      ecoFriendly: true,
      description: "Beautiful square wooden plate perfect for modern dining."
    },
    {
      id: "round-plate",
      name: "10\" Round Plate",
      price: 42,
      originalPrice: 50,
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
      category: "plates",
      badge: "New",
      ecoFriendly: true,
      description: "Classic round wooden plate with natural wood grain."
    },
    {
      id: "compartment-plate",
      name: "12\" Compartment Plate",
      price: 55,
      originalPrice: 65,
      rating: 4.8,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
      category: "plates",
      badge: "Family Size",
      ecoFriendly: true,
      description: "Multi-compartment plate perfect for balanced meals."
    },
    {
      id: "buffet-plate",
      name: "14\" Buffet Plate",
      price: 65,
      originalPrice: 75,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=400&fit=crop&crop=center",
      category: "plates",
      badge: "Premium",
      ecoFriendly: true,
      description: "Large buffet plate for generous servings and special occasions."
    },
    {
      id: "wooden-spoon",
      name: "4\" Wooden Spoon",
      price: 20,
      originalPrice: 25,
      rating: 4.7,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      category: "cutlery",
      badge: "Essential",
      ecoFriendly: true,
      description: "Sturdy wooden spoon for cooking and serving."
    },
    {
      id: "bowl",
      name: "6\" Bowl",
      price: 35,
      originalPrice: 42,
      rating: 4.5,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
      category: "bowls",
      badge: "Cereal Bowl",
      ecoFriendly: true,
      description: "Perfect wooden bowl for cereals, soups, and salads."
    },
  ];

  const categories = [
    { name: "All", value: "all", count: products.length },
    { name: "Cutlery", value: "cutlery", count: products.filter(p => p.category === "cutlery").length },
    { name: "Plates", value: "plates", count: products.filter(p => p.category === "plates").length },
    { name: "Bowls", value: "bowls", count: products.filter(p => p.category === "bowls").length },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-headings mb-6">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            Discover our complete collection of sustainable tableware, crafted from nature&apos;s finest materials
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-headings mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-card-accent transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-muted-foreground">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Filters */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-heading font-semibold text-headings mb-4">
                  Price Range
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-3" />
                    <span>Under ₹30</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-3" />
                    <span>₹30 - ₹50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-3" />
                    <span>Over ₹50</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort and Search */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">
                  Showing {products.length} products
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-border rounded-xl bg-white">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-card-accent">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary-accent text-primary-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-primary-accent hover:bg-white/90">
                        Quick View
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-headings mb-2 group-hover:text-primary-accent transition-colors">
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-heading font-bold text-headings">
                          ₹{product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/products/${product.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline" disabled>
                  Next
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
