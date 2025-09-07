import { Card } from "@/components/ui/card";
import { TrendingDown, Clock, AlertTriangle, Zap, Brain, Network } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Block */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Drug Development Crisis
              </h2>
              <p className="text-lg text-muted-foreground">
                Traditional drug discovery is broken. Time to revolutionize healthcare innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive">10-15 Years</div>
                  <div className="text-muted-foreground">Average development time</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive">$1B+</div>
                  <div className="text-muted-foreground">Cost per approved drug</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive">90%</div>
                  <div className="text-muted-foreground">Clinical trial failure rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Block */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Unlock hidden potential in existing drugs with cutting-edge generative AI.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 gradient-card border-primary/20 hover:shadow-card transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">AI Scanner</h3>
                    <p className="text-muted-foreground">Finds hidden drug-disease links across millions of research papers and clinical trials.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card border-secondary-accent/20 hover:shadow-card transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-accent/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-secondary-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Hypothesis Generator</h3>
                    <p className="text-muted-foreground">Suggests novel repurposing opportunities with confidence scores and supporting evidence.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card border-success/20 hover:shadow-card transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Network className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Knowledge Graph</h3>
                    <p className="text-muted-foreground">Visualizes complex relationships between drugs, pathways, and diseases for deeper insights.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;