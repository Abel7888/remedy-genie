import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  Server,
  Code,
  GitBranch,
  Clock,
  DollarSign,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Documentation = () => {
  const techStack = [
    { name: "React + Next.js", icon: Code, category: "Frontend" },
    { name: "Tailwind CSS", icon: Code, category: "Styling" },
    { name: "D3.js/Cytoscape", icon: GitBranch, category: "Visualization" },
    { name: "FastAPI", icon: Server, category: "Backend" },
    { name: "GPT-4/5", icon: Brain, category: "AI/NLP" },
    { name: "BioBERT", icon: Brain, category: "AI/NLP" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "Neo4j", icon: Database, category: "Graph DB" },
    { name: "Docker + AWS", icon: Globe, category: "Deployment" },
  ];

  const timeline = [
    { week: "1-2", task: "Data ingestion + pipelines", status: "completed" },
    { week: "3-4", task: "NLP embeddings + graph build", status: "completed" },
    { week: "5", task: "Generative hypothesis engine", status: "in-progress" },
    { week: "6-7", task: "Dashboard (search + visualization)", status: "pending" },
    { week: "8", task: "Reporting + roles", status: "pending" },
    { week: "9-10", task: "Pilot demo with hospital partner", status: "pending" },
  ];

  const dataSources = [
    { name: "PubMed", papers: "34M+", type: "Research Papers" },
    { name: "ClinicalTrials.gov", trials: "400K+", type: "Clinical Trials" },
    { name: "DrugBank", drugs: "15K+", type: "Drug Database" },
    { name: "ChEMBL", compounds: "2M+", type: "Chemical Database" },
    { name: "Open Targets", targets: "40K+", type: "Target Database" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Documentation & Architecture
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical overview of the Generative AI Drug Repurposing Assistant platform, 
              including architecture, technology stack, and development timeline.
            </p>
          </div>

          {/* Architecture Flow */}
          <Card className="p-8 mb-12 gradient-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">System Architecture</h2>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
              
              {/* Data Sources */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">Data Sources</div>
                <div className="text-xs text-muted-foreground">PubMed, Clinical Trials</div>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto hidden lg:block" />

              {/* ETL Pipeline */}
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-8 w-8 text-secondary-accent" />
                </div>
                <div className="text-sm font-medium text-foreground">ETL Pipeline</div>
                <div className="text-xs text-muted-foreground">APIs + Scrapers</div>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto hidden lg:block" />

              {/* AI Processing */}
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-8 w-8 text-success" />
                </div>
                <div className="text-sm font-medium text-foreground">AI Layer</div>
                <div className="text-xs text-muted-foreground">NLP + Generation</div>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto hidden lg:block" />

              {/* Knowledge Graph */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <GitBranch className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">Knowledge Graph</div>
                <div className="text-xs text-muted-foreground">Neo4j Database</div>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto hidden lg:block" />

              {/* Frontend */}
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="h-8 w-8 text-secondary-accent" />
                </div>
                <div className="text-sm font-medium text-foreground">Frontend</div>
                <div className="text-xs text-muted-foreground">React + D3.js</div>
              </div>

              <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto hidden lg:block" />

              {/* End Users */}
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <div className="text-sm font-medium text-foreground">End Users</div>
                <div className="text-xs text-muted-foreground">Hospitals, Pharma</div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Tech Stack */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Technology Stack</h3>
              <div className="space-y-4">
                {['Frontend', 'AI/NLP', 'Database', 'Deployment'].map((category) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {techStack
                        .filter(tech => tech.category === category)
                        .map((tech) => {
                          const IconComponent = tech.icon;
                          return (
                            <Badge key={tech.name} variant="secondary" className="flex items-center space-x-1">
                              <IconComponent className="h-3 w-3" />
                              <span>{tech.name}</span>
                            </Badge>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Data Sources */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Data Sources</h3>
              <div className="space-y-4">
                {dataSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">{source.name}</div>
                      <div className="text-sm text-muted-foreground">{source.type}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">
                        {source.papers || source.trials || source.drugs || source.compounds || source.targets}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Development Timeline */}
          <Card className="p-6 mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">Development Timeline (8-10 Weeks)</h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-accent/30">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'completed' ? 'bg-success text-white' :
                      item.status === 'in-progress' ? 'bg-primary text-white' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {item.status === 'completed' ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    <div className="font-medium text-foreground">Weeks {item.week}</div>
                  </div>
                  <div className="flex-1 text-muted-foreground">{item.task}</div>
                  <Badge variant={
                    item.status === 'completed' ? 'default' :
                    item.status === 'in-progress' ? 'secondary' :
                    'outline'
                  }>
                    {item.status === 'completed' ? 'Complete' :
                     item.status === 'in-progress' ? 'In Progress' :
                     'Pending'}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Project Cost & Demo Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Cost Estimate */}
            <Card className="p-6 gradient-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <DollarSign className="h-6 w-6 mr-2 text-success" />
                Project Cost Estimate
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Data ingestion + NLP pipeline</span>
                  <span className="font-semibold text-foreground">$10,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">AI/Generative hypothesis engine</span>
                  <span className="font-semibold text-foreground">$12,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Dashboard UI + visualization</span>
                  <span className="font-semibold text-foreground">$15,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Reporting & Deployment</span>
                  <span className="font-semibold text-foreground">$8,000</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-foreground">MVP Development Total</span>
                    <span className="text-success">$45,000</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Demo Flow */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Pilot Demo Flow</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <div>
                    <div className="font-medium text-foreground">Disease Input</div>
                    <div className="text-sm text-muted-foreground">Researcher enters target disease name</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <div>
                    <div className="font-medium text-foreground">AI Analysis</div>
                    <div className="text-sm text-muted-foreground">AI suggests top 5 repurposing candidates</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <div>
                    <div className="font-medium text-foreground">Visualization</div>
                    <div className="text-sm text-muted-foreground">Graph expands with pathways + supporting citations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                  <div>
                    <div className="font-medium text-foreground">Report Generation</div>
                    <div className="text-sm text-muted-foreground">Export PDF report ready for research/IRB</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Security & Compliance */}
          <Card className="p-6 gradient-primary text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">HIPAA-Compliant Design</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Built with healthcare data security as a priority. Full compliance with HIPAA regulations, 
              end-to-end encryption, and secure cloud infrastructure.
            </p>
            <Button variant="medical" size="lg">
              View Security Documentation
            </Button>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;