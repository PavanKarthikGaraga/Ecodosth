import Link from "next/link";
import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-linear-to-br from-bg via-alt-bg to-card-accent opacity-30"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(105,92,73,0.3)_1px,transparent_0)] bg-size[20px_20px]"></div> {/* TODO: Change the color to the primary-accent */}  
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-headings leading-tight mb-6">
            From Nature,<br />
            <span className="text-primary">For Tomorrow</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-body-text max-w-3xl mx-auto mb-12 leading-relaxed">
            Premium wooden, bamboo, and areca tableware crafted with care.
            Beautiful, durable, and completely biodegradable alternatives to plastic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-primary-accent hover:bg-primary-accent/90 text-primary-foreground px-8 py-4 text-lg font-medium"
            >
              <Link href="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-primary-foreground px-8 py-4 text-lg font-medium"
            >
              <Link href="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
