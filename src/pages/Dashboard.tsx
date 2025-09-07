import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Download, 
  FileText, 
  Database, 
  TrendingUp, 
  Pill,
  Dna,
  Stethoscope,
  BookOpen,
  Filter,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockResults = [
    {
      drug: "Metformin",
      confidence: 94,
      citations: 47,
      phase: "Phase II",
      mechanism: "AMPK activation",
      disease: "Alzheimer's Disease"
    },
    {
      drug: "Aspirin",
      confidence: 89,
      citations: 32,
      phase: "Phase III",
      mechanism: "COX inhibition",
      disease: "Colorectal Cancer"
    },
    {
      drug: "Rapamycin",
      confidence: 87,
      citations: 28,
      phase: "Phase I",
      mechanism: "mTOR inhibition",
      disease: "Aging-related diseases"
    },
    {
      drug: "Sildenafil",
      confidence: 82,
      citations: 21,
      phase: "Phase II",
      mechanism: "PDE5 inhibition",
      disease: "Pulmonary Hypertension"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Dashboard Preview
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search diseases. Discover candidates. Export reports. Experience the power of AI-driven drug repurposing.
            </p>
          </div>

          {/* Search Bar */}
          <Card className="p-6 mb-8 gradient-card">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter disease name (e.g., Alzheimer's, Cancer, Diabetes)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button variant="hero" size="lg" className="md:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Search Database
              </Button>
              <Button variant="outline" size="lg">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </div>
          </Card>

          <Tabs defaultValue="insights" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="knowledge-graph">Knowledge Graph</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="saved">Saved Searches</TabsTrigger>
            </TabsList>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Results Panel */}
                <div className="lg:col-span-2">
                  <Card className="shadow-card">
                    <div className="p-6 border-b border-border">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-foreground">Drug Candidates</h3>
                        <Badge variant="secondary">{mockResults.length} results found</Badge>
                      </div>
                    </div>
                    <div className="divide-y divide-border">
                      {mockResults.map((result, index) => (
                        <div key={index} className="p-6 hover:bg-accent/50 transition-smooth cursor-pointer">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Pill className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-foreground">{result.drug}</h4>
                                <p className="text-muted-foreground">{result.disease}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-success">{result.confidence}%</div>
                              <div className="text-sm text-muted-foreground">Confidence</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{result.citations} Citations</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{result.phase}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Dna className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{result.mechanism}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  
                  {/* Quick Stats */}
                  <Card className="p-6 gradient-card">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Database Size</span>
                        <span className="font-semibold">2.3M+ Papers</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Drug Compounds</span>
                        <span className="font-semibold">15,847</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Disease Targets</span>
                        <span className="font-semibold">3,421</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Success Rate</span>
                        <span className="font-semibold text-success">73%</span>
                      </div>
                    </div>
                  </Card>

                  {/* Export Tools */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Export Results</h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Generate PDF Report
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Download className="mr-2 h-4 w-4" />
                        Export to Excel
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Database className="mr-2 h-4 w-4" />
                        API Endpoint
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="knowledge-graph">
              <Card className="p-8 text-center min-h-96 flex items-center justify-center gradient-card">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Dna className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Interactive Knowledge Graph</h3>
                  <p className="text-muted-foreground mb-6">
                    Visualize complex relationships between drugs, pathways, diseases, and clinical outcomes. 
                    Interactive nodes reveal confidence scores and supporting evidence.
                  </p>
                  <Button variant="hero">
                    Launch Graph Visualization
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card className="p-8 text-center min-h-96 flex items-center justify-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="h-10 w-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Report Builder</h3>
                  <p className="text-muted-foreground mb-6">
                    Generate comprehensive reports with timeline views of trial phases, 
                    confidence metrics, and exportable formats for research teams.
                  </p>
                  <Button variant="success">
                    Create New Report
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="saved">
              <Card className="p-8 text-center min-h-96 flex items-center justify-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-secondary-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="h-10 w-10 text-secondary-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Saved Searches</h3>
                  <p className="text-muted-foreground mb-6">
                    Access your previous queries, bookmark promising candidates, 
                    and track research progress over time.
                  </p>
                  <Button variant="outline">
                    View Saved Items
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;