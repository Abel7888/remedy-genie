import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* DNA Pattern Overlay */}
      <div className="absolute inset-0 dna-pattern opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="slide-up-animation">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary-accent bg-clip-text text-transparent">
              Generative AI
            </span>
            <br />
            Drug Repurposing Assistant
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Turning existing molecules into tomorrow's cures — 
            <span className="text-primary font-semibold"> faster, cheaper, smarter.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/dashboard">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Explore Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="medical" size="lg" className="w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5" />
              Request Pilot
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-muted-foreground">R&D Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">Months → Days</div>
              <div className="text-muted-foreground">Discovery Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-accent mb-2">90%</div>
              <div className="text-muted-foreground">Research Automation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-accent/10 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-success/10 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;