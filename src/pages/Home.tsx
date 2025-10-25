import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Shield, Brain, Activity, FileText, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-medical-ai.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your medical reports with high accuracy",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Your medical data is encrypted and secured using blockchain technology",
    },
    {
      icon: Activity,
      title: "Multi-Report Support",
      description: "Supports MRI, CT, Ultrasound, Endoscopy, and Blood Test reports",
    },
  ];

  const reportTypes = [
    { icon: Brain, name: "MRI Scans", color: "text-primary" },
    { icon: Activity, name: "CT Scans", color: "text-accent" },
    { icon: Microscope, name: "Blood Tests", color: "text-success" },
    { icon: FileText, name: "Endoscopy", color: "text-warning" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Smart Diagnosis.
                </span>
                <br />
                <span className="text-foreground">Secure Data.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Our AI-powered system analyzes MRI, CT, Ultrasound, Endoscopy, and Blood Test reports 
                with precision, while blockchain technology ensures your medical data remains secure and private.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/upload">
                  <Button size="lg" className="w-full sm:w-auto group shadow-medium hover:shadow-large transition-all duration-300">
                    <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Upload Report
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="AI Medical Analysis Visualization" 
                className="relative rounded-2xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MediScan AI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining cutting-edge AI technology with blockchain security for reliable medical diagnosis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Reports Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Report Types</h2>
            <p className="text-muted-foreground">
              Advanced AI analysis for various medical diagnostic reports
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {reportTypes.map((report, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:scale-105 bg-card border-border cursor-pointer"
              >
                <report.icon className={`h-12 w-12 mx-auto mb-3 ${report.color}`} />
                <p className="font-medium">{report.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Upload your medical report now and get instant AI-powered analysis with blockchain-verified security
          </p>
          <Link to="/upload">
            <Button size="lg" variant="secondary" className="shadow-large hover:scale-105 transition-transform">
              <Upload className="mr-2 h-5 w-5" />
              Upload Your Report
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
