import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FlaskConical, Users, Heart, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const valueProps = [
    {
      icon: Building2,
      title: "Hospitals",
      benefit: "Faster therapies for trials",
      description: "Attract more sponsored research and accelerate patient access to innovative treatments.",
      color: "primary",
    },
    {
      icon: FlaskConical,
      title: "Pharma",
      benefit: "Unlock revenue from shelved drugs",
      description: "Discover new indications for existing compounds, extending patent life and market potential.",
      color: "secondary-accent",
    },
    {
      icon: Users,
      title: "Researchers",
      benefit: "Save 100s of hours",
      description: "Automate literature review and hypothesis generation with AI-powered insights.",
      color: "success",
    },
    {
      icon: Heart,
      title: "Patients",
      benefit: "Faster access to treatments",
      description: "Reduce time from discovery to clinic through intelligent drug repurposing.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Executives",
      benefit: "Reduce R&D cost, improve ROI",
      description: "Maximize investment returns with data-driven drug development strategies.",
      color: "success",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Value for Every Stakeholder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI platform delivers measurable benefits across the entire healthcare ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card 
                key={prop.title}
                className={`p-8 text-center hover:shadow-card transition-smooth cursor-pointer transform hover:-translate-y-2 gradient-card ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${prop.color}/10 flex items-center justify-center`}>
                  <IconComponent className={`h-8 w-8 text-${prop.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{prop.title}</h3>
                <div className={`text-lg font-medium text-${prop.color} mb-4`}>{prop.benefit}</div>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Business Case Strip */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center molecule-pattern">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">30-50%</div>
              <div className="text-white/80">R&D Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Months → Days</div>
              <div className="text-white/80">Discovery Speed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">More Trials</div>
              <div className="text-white/80">Hospital Partnerships</div>
            </div>
          </div>
          <div className="mt-8">
            <Button variant="medical" size="lg">
              Schedule Business Case Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;