import Image from "next/image";

const Certifications = () => {
  const certifications = [
    { name: "FSC Certified", logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=80&fit=crop&crop=center" },
    { name: "Biodegradable", logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=120&h=80&fit=crop&crop=center" },
    { name: "Food Safe", logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=80&fit=crop&crop=center" },
    { name: "Fair Trade", logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=120&h=80&fit=crop&crop=center" },
    { name: "ISO 9001", logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&h=80&fit=crop&crop=center" },
    { name: "Green Manufacturing", logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&h=80&fit=crop&crop=center" },
  ];

  return (
    <section className="py-16 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-headings mb-4">
            Trusted Certifications
          </h2>
          <p className="text-muted-foreground">
            Our commitment to quality and sustainability is backed by internationally recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center p-4 bg-alt-bg rounded-xl hover:bg-card-accent transition-colors duration-300"
            >
              <div className="relative w-20 h-12 mb-2">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain rounded"
                  sizes="80px"
                />
              </div>
              <span className="text-xs text-muted-foreground text-center font-medium">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
