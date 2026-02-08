"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products, Product, ProductVariant } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const product = products.find(p => p.id === id);

  // State for selections
  const [selectedQuality, setSelectedQuality] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedWeight, setSelectedWeight] = useState<string>("");
  const [currentVariant, setCurrentVariant] = useState<ProductVariant | null>(null);

  // Initialize defaults on product load
  useEffect(() => {
    if (product) {
      // Default to the first available variant options
      const defaultVariant = product.variants[0];
      if (defaultVariant) {
        setSelectedQuality(defaultVariant.attributes.quality || "Standard");
        setSelectedSize(defaultVariant.attributes.size || "Standard");
        setSelectedWeight(defaultVariant.attributes.weight || "Standard");
      }
    }
  }, [product]);

  // Update current variant when selections change
  useEffect(() => {
    if (product) {
      const variant = product.variants.find(v =>
        (v.attributes.quality || "Standard") === selectedQuality &&
        (v.attributes.size || "Standard") === selectedSize &&
        (v.attributes.weight || "Standard") === selectedWeight
      );
      setCurrentVariant(variant || null);
    }
  }, [product, selectedQuality, selectedSize, selectedWeight]);

  if (!product) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link href="/#products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Derive available options based on current selections
  // 1. Available Qualities (always all available for the product)
  const availableQualities = Array.from(new Set(product.variants.map(v => v.attributes.quality || "Standard")));

  // 2. Available Sizes (based on selected quality)
  const availableSizes = Array.from(new Set(
    product.variants
      .filter(v => (v.attributes.quality || "Standard") === selectedQuality)
      .map(v => v.attributes.size || "Standard")
  ));

  // 3. Available Weights (based on selected quality AND size)
  const availableWeights = Array.from(new Set(
    product.variants
      .filter(v =>
        (v.attributes.quality || "Standard") === selectedQuality &&
        (v.attributes.size || "Standard") === selectedSize
      )
      .map(v => v.attributes.weight || "Standard")
  ));

  const handleQualityChange = (quality: string) => {
    setSelectedQuality(quality);
    // Reset dependent selections to valid defaults
    const validVariants = product.variants.filter(v => (v.attributes.quality || "Standard") === quality);
    if (validVariants.length > 0) {
      setSelectedSize(validVariants[0].attributes.size || "Standard");
      setSelectedWeight(validVariants[0].attributes.weight || "Standard");
    }
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    // Reset weight to a valid default for this size
    const validVariants = product.variants.filter(v =>
      (v.attributes.quality || "Standard") === selectedQuality &&
      (v.attributes.size || "Standard") === size
    );
    if (validVariants.length > 0) {
      setSelectedWeight(validVariants[0].attributes.weight || "Standard");
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary-accent">Home</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-primary-accent">Products</Link>
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
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-card-accent cursor-pointer">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1} `}
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
                      className={`h - 5 w - 5 ${i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                        } `}
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
                  ₹{currentVariant ? currentVariant.price : "..."}
                </span>
                {currentVariant && currentVariant.originalPrice > currentVariant.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{currentVariant.originalPrice}
                    </span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Save ₹{currentVariant.originalPrice - currentVariant.price}
                    </Badge>
                  </>
                )}
              </div>

              {/* Variant Selectors */}

              {/* Quality Selector */}
              {availableQualities.length > 1 && (
                <div className="mb-4">
                  <span className="block text-sm font-medium text-headings mb-2">Quality</span>
                  <div className="flex flex-wrap gap-3">
                    {availableQualities.map(q => (
                      <button
                        key={q}
                        onClick={() => handleQualityChange(q)}
                        className={cn(
                          "px-4 py-2 rounded-lg border transition-all text-sm font-medium",
                          selectedQuality === q
                            ? "bg-primary-accent text-white border-primary-accent"
                            : "bg-white text-body-text border-border hover:border-primary-accent/50"
                        )}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {availableSizes.length > 1 && (
                <div className="mb-4">
                  <span className="block text-sm font-medium text-headings mb-2">Size</span>
                  <div className="flex flex-wrap gap-3">
                    {availableSizes.map(s => (
                      <button
                        key={s}
                        onClick={() => handleSizeChange(s)}
                        className={cn(
                          "px-4 py-2 rounded-lg border transition-all text-sm font-medium",
                          selectedSize === s
                            ? "bg-primary-accent text-white border-primary-accent"
                            : "bg-white text-body-text border-border hover:border-primary-accent/50"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Weight/Variant Selector */}
              {availableWeights.length > 1 && (
                <div className="mb-6">
                  <span className="block text-sm font-medium text-headings mb-2">Weight / Thickness</span>
                  <div className="flex flex-wrap gap-3">
                    {availableWeights.map(w => (
                      <button
                        key={w}
                        onClick={() => setSelectedWeight(w)}
                        className={cn(
                          "px-4 py-2 rounded-lg border transition-all text-sm font-medium relative overflow-hidden",
                          selectedWeight === w
                            ? "bg-primary-accent text-white border-primary-accent"
                            : "bg-white text-body-text border-border hover:border-primary-accent/50"
                        )}
                      >
                        {w}
                        {selectedWeight === w && (
                          <div className="absolute top-0 right-0 p-0.5 bg-white/20 rounded-bl">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}


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
                <Button className="flex-1" size="lg" disabled={!currentVariant}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {currentVariant ? "Add to Cart" : "Unavailable"}
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
                {/* Dynamic Specs based on Variant */}
                {currentVariant?.attributes.quality && (
                  <div className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="font-medium text-headings">Quality:</span>
                    <span className="text-muted-foreground">{currentVariant.attributes.quality}</span>
                  </div>
                )}
                {currentVariant?.attributes.weight && currentVariant.attributes.weight !== "Standard" && (
                  <div className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="font-medium text-headings">Weight:</span>
                    <span className="text-muted-foreground">{currentVariant.attributes.weight}</span>
                  </div>
                )}
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
                      <Button size="sm" className="bg-white text-primary-accent hover:bg-white/90" asChild>
                        <Link href={`/product/${relatedProduct.id}`}>Quick View</Link>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-lg font-heading font-semibold text-headings mb-2 group-hover:text-primary-accent transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-headings">
                          ₹{Math.min(...relatedProduct.variants.map(v => v.price))}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="w-full mt-3" size="sm">
                      <Link href={`/product/${relatedProduct.id}`}>
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