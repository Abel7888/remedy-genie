import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="DrugAI Logo" className="h-10 w-10 rounded-lg" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">DrugAI</span>
                <span className="text-xs text-muted-foreground">Repurposing Assistant</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing drug discovery through generative AI. Prototype concept for 
              discussion with hospital and pharmaceutical leaders.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Note: Prototype Concept</p>
              <p>For discussion with hospital & pharma leaders</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-muted-foreground hover:text-primary transition-smooth">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Compliance</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DrugAI Repurposing Assistant. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with advanced AI for healthcare innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;