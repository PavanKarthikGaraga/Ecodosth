import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  // Mock product data - in a real app, this would come from an API or database
  const products = [
    {
      id: "wooden-spork-white",
      name: "4\" Wooden Spork - White",
      price: 25,
      originalPrice: 30,
      rating: 4.8,
      reviews: 234,
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center",
      ],
      category: "cutlery",
      badge: "Best Seller",
      ecoFriendly: true,
      inStock: true,
      description: "Premium wooden spork perfect for camping, picnics, and eco-conscious dining. Crafted from sustainable bamboo with food-safe finish.",
      features: [
        "100% biodegradable and compostable",
        "Food-safe, non-toxic finish",
        "Lightweight and durable",
        "Dishwasher safe",
        "Perfect for outdoor activities",
        "Made from sustainable bamboo"
      ],
      specifications: {
        "Material": "Sustainable Bamboo",
        "Length": "4 inches",
        "Weight": "15g",
        "Finish": "Natural Food-Safe Coating",
        "Origin": "India"
      },
      ecoBenefits: [
        "Reduces plastic waste by 1kg per spork used instead of plastic",
        "Carbon neutral manufacturing process",
        "Supports local artisans and communities",
        "Fully biodegradable at end of life"
      ]
    },
    {
      id: "wooden-spork-green",
      name: "4\" Wooden Spork - Green",
      price: 25,
      originalPrice: 30,
      rating: 4.9,
      reviews: 189,
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center",
      ],
      category: "cutlery",
      badge: "Eco Choice",
      ecoFriendly: true,
      inStock: true,
      description: "Sustainable green-tinted wooden spork for nature lovers. Made from eco-friendly materials with natural coloring.",
      features: [
        "100% biodegradable and compostable",
        "Natural green coloring from plant extracts",
        "Food-safe, non-toxic finish",
        "Lightweight and durable",
        "Dishwasher safe",
        "Made from sustainable bamboo"
      ],
      specifications: {
        "Material": "Sustainable Bamboo with Natural Coloring",
        "Length": "4 inches",
        "Weight": "15g",
        "Finish": "Natural Food-Safe Coating",
        "Origin": "India"
      },
      ecoBenefits: [
        "Reduces plastic waste by 1kg per spork used instead of plastic",
        "Uses natural, non-chemical coloring",
        "Carbon neutral manufacturing process",
        "Supports local artisans and communities"
      ]
    },
    {
      id: "square-plate",
      name: "10\" Square Plate",
      price: 45,
      originalPrice: 55,
      rating: 4.7,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
      ],
      category: "plates",
      badge: "Popular",
      ecoFriendly: true,
      inStock: true,
      description: "Beautiful square wooden plate perfect for modern dining. Made from sustainable bamboo with elegant design.",
      features: [
        "100% biodegradable and compostable",
        "Food-safe, non-toxic finish",
        "Elegant square design",
        "Dishwasher safe",
        "Perfect for modern dining",
        "Made from sustainable bamboo"
      ],
      specifications: {
        "Material": "Sustainable Bamboo",
        "Size": "10 inches square",
        "Weight": "180g",
        "Finish": "Natural Food-Safe Coating",
        "Origin": "India"
      },
      ecoBenefits: [
        "Reduces plastic waste significantly",
        "Carbon neutral manufacturing process",
        "Supports sustainable bamboo farming",
        "Fully biodegradable at end of life"
      ]
    },
    {
      id: "round-plate",
      name: "10\" Round Plate",
      price: 42,
      originalPrice: 50,
      rating: 4.6,
      reviews: 98,
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center",
      ],
      category: "plates",
      badge: "New",
      ecoFriendly: true,
      inStock: true,
      description: "Classic round wooden plate with natural wood grain. Perfect for traditional and modern dining experiences.",
      features: [
        "100% biodegradable and compostable",
        "Food-safe, non-toxic finish",
        "Classic round design",
        "Dishwasher safe",
        "Natural wood grain beauty",
        "Made from sustainable bamboo"
      ],
      specifications: {
        "Material": "Sustainable Bamboo",
        "Size": "10 inches diameter",
        "Weight": "170g",
        "Finish": "Natural Food-Safe Coating",
        "Origin": "India"
      },
      ecoBenefits: [
        "Reduces plastic waste significantly",
        "Carbon neutral manufacturing process",
        "Supports sustainable bamboo farming",
        "Fully biodegradable at end of life"
      ]
    }
  ];

  const product = products.find(p => p.id === params.slug) || products[0];

  return (
    <div className="min-h-screen bg-bg">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary-accent">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary-accent">Products</Link>
          <span>/</span>
          <span className="text-headings">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-card-accent">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-card-accent cursor-pointer">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover hover:opacity-80 transition-opacity"
                    sizes="(max-width: 1024px) 25vw, 12.5vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {product.badge && (
                  <Badge className="bg-primary-accent text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
                {product.ecoFriendly && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Eco-Friendly
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-heading font-bold text-headings">
                  ₹{product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Save ₹{product.originalPrice - product.price}
                </Badge>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">In Stock</span>
                <span className="text-muted-foreground">• Ships within 2-3 business days</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-headings mb-3">
                Description
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-headings">Quantity:</label>
                <select className="px-4 py-2 border border-border rounded-xl bg-white min-w-20">
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold text-headings mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-accent rounded-full mt-2 mr-3 shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Shipping & Returns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-alt-bg rounded-xl">
                <Truck className="h-8 w-8 text-primary-accent" />
                <div>
                  <div className="font-medium text-headings">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">Orders over ₹500</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-alt-bg rounded-xl">
                <Shield className="h-8 w-8 text-primary-accent" />
                <div>
                  <div className="font-medium text-headings">Secure Payment</div>
                  <div className="text-sm text-muted-foreground">100% Protected</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-alt-bg rounded-xl">
                <RotateCcw className="h-8 w-8 text-primary-accent" />
                <div>
                  <div className="font-medium text-headings">Easy Returns</div>
                  <div className="text-sm text-muted-foreground">30-day policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications and Eco Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold text-headings mb-6">
                Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="font-medium text-headings">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold text-headings mb-6">
                Environmental Impact
              </h3>
              <div className="space-y-4">
                {product.ecoBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-headings mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-card-accent">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {relatedProduct.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary-accent text-primary-foreground">
                        {relatedProduct.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-primary-accent hover:bg-white/90">
                        Quick View
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-lg font-heading font-semibold text-headings mb-2 group-hover:text-primary-accent transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-headings">₹{relatedProduct.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{relatedProduct.originalPrice}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="w-full mt-3" size="sm">
                      <Link href={`/products/${relatedProduct.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;