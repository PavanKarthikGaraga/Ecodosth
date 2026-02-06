import { TreePine, Droplets, Recycle, Users } from "lucide-react";

const SustainabilityImpact = () => {
  const impacts = [
    {
      icon: TreePine,
      value: "50,000+",
      label: "Trees Saved",
      description: "Equivalent to our sustainable sourcing practices",
      color: "text-green-600",
    },
    {
      icon: Droplets,
      value: "2.5M",
      label: "Liters Water Conserved",
      description: "Compared to traditional manufacturing",
      color: "text-blue-600",
    },
    {
      icon: Recycle,
      value: "100%",
      label: "Biodegradable Products",
      description: "Zero plastic waste contribution",
      color: "text-orange-600",
    },
    {
      icon: Users,
      value: "500+",
      label: "Artisans Supported",
      description: "Fair wages and skill development",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every product you choose makes a difference. Here&apos;s how we&apos;re creating
            a more sustainable future together.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="text-left  transition-all duration-300"
              >
                
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col items-start">
                    <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                      {impact.value}
                    </div>
                    <div className="text-lg font-heading font-semibold mb-2">
                      {impact.label}
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-accent/10 rounded-full">
                    <Icon className="h-8 w-8 text-primary-accent" />
                  </div>
                </div>
                <div className="text-sm opacity-80 pr-4">
                  {impact.description}
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
    </section>
  );
};

export default SustainabilityImpact;
