import Link from "next/link";
import { ShoppingBag, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DualCTA = () => {
  return (
    <section className="py-10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Shop CTA */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-accent/10 rounded-full mb-6">
              <ShoppingBag className="h-8 w-8 text-primary-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
              Start Your Sustainable Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Browse our collection of premium wooden, bamboo, and areca tableware.
              Quality craftsmanship meets environmental responsibility.
            </p>
            <Button asChild size="lg" className="bg-white text-primary-accent hover:bg-white/90">
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Bulk CTA */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-accent/10 rounded-full mb-6">
              <Package className="h-8 w-8 text-primary-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
              Bulk Orders for Businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md ml-auto">
              Perfect for restaurants, hotels, and eco-conscious businesses.
              Custom packaging and competitive wholesale pricing.
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white">
              <Link href="/contact?type=bulk">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold mb-1">50K+</div>
              <div className="text-sm opacity-80">Products Sold</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold mb-1">25+</div>
              <div className="text-sm opacity-80">Countries</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold mb-1">4.8★</div>
              <div className="text-sm opacity-80">Customer Rating</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">Biodegradable</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DualCTA;
