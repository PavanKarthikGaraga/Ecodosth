import Link from "next/link";
import { ArrowRight, Users, Cog, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ManufacturingPreview = () => {
  const processes = [
    {
      title: "Artisan Crafting",
      description: "Skilled craftsmen shape each piece by hand, ensuring perfect form and function",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
      icon: Users,
    },
    {
      title: "Sustainable Sourcing",
      description: "We source materials directly from certified sustainable forests and plantations",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      icon: Cog,
    },
    {
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing before reaching your table",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
            From Forest to Table
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our meticulous manufacturing process ensures every piece meets the highest
            standards of quality, sustainability, and craftsmanship.
          </p>
        </div>

        {/* Process Images Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {processes.map((process) => {
            const Icon = process.icon;
            return (
              <div
                key={process.title}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <Image
                  src={process.image}
                  alt={process.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-linear-to-br from-primary-accent/20 to-transparent"></div>
                </div>

                {/* Icon */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full">
                    <Icon className="h-6 w-6 text-primary-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/60 to-transparent z-10">
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-alt-bg rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-headings mb-4">
              Experience Our Manufacturing Excellence
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Visit our facility to see how we transform natural materials into
              beautiful, sustainable tableware with traditional techniques and modern quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/manufacturing">
                  Tour Our Facility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/sustainability">
                  Learn About Our Materials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingPreview;
