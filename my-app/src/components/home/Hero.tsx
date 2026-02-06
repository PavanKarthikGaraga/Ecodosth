"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const heroScale = useMemo(() => {
    const progress = Math.min(scrollY / 500, 1);
    return 1 - progress * 0.16;
  }, [scrollY]);
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden will-change-transform rounded-3xl"
      style={{ transform: `scale(${heroScale})`, transformOrigin: "top center" }}
    >
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#FEFAE0_0%,#ffffff_50%,#D3C8B4_100%)] opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,108,56,0.1),transparent_50%)]"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(105,92,73,0.3)_1px,transparent_0)] bg-size[20px_20px]"></div> {/* TODO: Change the color to the primary-accent */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-headings leading-tight mb-6">
            From Nature,<br />
            <span className="text-primary">For Tomorrow</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-body-text max-w-3xl mx-auto mb-12 leading-relaxed">
            Premium wooden, bamboo, and areca tableware crafted with care.
            Beautiful, durable, and completely biodegradable alternatives to plastic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
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

      {/* Bottom-centered half-visible rotating image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[500px] h-[130px] sm:h-[160px] md:h-[190px] lg:h-[220px] xl:h-[250px] overflow-hidden">
        <div
          className="relative w-full aspect-square will-change-transform"
          style={{
            transform: mounted ? "translateY(0px)" : "translateY(140px)",
            transition: "transform 900ms ease-out",
          }}
        >
          <div
            className="relative w-full h-full rounded-full  animate-spin"
            style={{ animationDuration: "18s" }}
          >
            <Image
              src="/plate.png"
              alt="Eco-friendly areca plate"
              fill
              priority
              className="object-contain bg-transparent"
              sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 440px, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
